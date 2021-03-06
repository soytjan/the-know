import keys from './api/keys.js';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

export const getGeoLocation = async () => {
  try {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${keys.googleMapsApiKey}`
    const response = await fetch(url, {
      method: 'POST',
      header: { 'content-type': 'application/json' }
     })

    if (response.status > 226) {
      throw new Error('could not get current location coordinates');
    } else {
      const jsonResponse = await response.json();
      const currentLocation = { coordinates: jsonResponse.location }
      return currentLocation;
    }
  } catch (error) {
    throw (error);
  }
}

export const getAddressCoords = async (location) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${keys.googleMapsApiKey}`
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not get address coordinates');
    } else {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    throw (error)
  }
}

export const cleanAddressCoords = (address) => {
  const geocode = address.results[0];
  const cleanLocation = {
    address: geocode.formatted_address,
    coordinates: geocode.geometry.location,
  }

  return cleanLocation;
}

export const getReverseGeocodeLocation = async (coords) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${keys.googleMapsApiKey}`;
    const response = await fetch(url)
    if (response.status > 226) {
      throw new Error('could not get address coordinates');
    } else {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    throw (error);
  }
}

export const fetchAndCleanGeocodeLocation = async (location) => {
  const jsonResponse = await getAddressCoords(location);
  return await cleanAddressCoords(jsonResponse);
} 

export const fetchAndCleanReverseGeocodeLocation = async (coords) => {
  const jsonResponse = await getReverseGeocodeLocation(coords);
  return await cleanAddressCoords(jsonResponse);
}

export const cleanEventDataToStore = (info, category) => {
  if (!info.events) {
    return null;
  }
  const events = info.events.event;

  return events.reduce((eventsObj, event) => {
    const obj = {
      [event.id]: {
        title: event.title,
        description: event.description,
        category: category,
        venueName: event.venue_name,
        region: event.region_abbr,
        postalCode: event.postal_code,
        city: event.city_name,
        startTime: event.start_time,
        venueAddress: event.venue_address,
        image: event.image,
        url: event.url,
        id: event.id,
      }
    }

    return {...eventsObj, ...obj};
  }, {})
}

export const fetchAndCleanCategoryEventData = async (category, location) => {
  const jsonResponse = await getCategoryData(category, location);
  const events = cleanEventDataToStore(jsonResponse, category);
  return events;
}

// minimize some of the repetition
// handleError and pass in error as an argument
export const genApiUrl = (type, location) => {
  if (!location.coordinates) {
    return null;
  }
  const coords = location.coordinates;

  let category; 
  switch(type) {
    case 'music':
      category = '&category=music';
      break;
    case 'food':
      category = '&category=food';
      break;
    case 'culture':
      category = '&category=attractions';
      break;
    case 'nightlife':
      category = '&category=singles_social';
      break;
    default: 
      category = '';
  }

  return `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}&page_size=20${category}&date=Future`
}

export const getCategoryData = async (category, location) => {
  try {
    const url = genApiUrl(category, location);

    // need to think of a better way to handle this -- some sort of error msg, etc.
    if (!url) {
      return {};
    }

    const response = await fetch(url, {mode: 'cors'});

    if (response.status > 226) {
      throw new Error('could not get city event data');
    } else {
      const responseJson = await response.json();
      return responseJson
    }
  } catch (error) {
    throw (error)
  }
}

export const fetchSearchData = async (keywords, location) => {
  const coords = location.coordinates;
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&where=${coords.lat},${coords.lng}&within=25&app_key=${keys.eventfulKey}&keywords=${keywords}&date=Future`;
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not find what you are looking for');
    } else {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    throw error
  }
}

export const fetchAndCleanSearchData = async (keywords, location) => {
  const jsonResponse = await fetchSearchData(keywords, location);
  return cleanEventDataToStore(jsonResponse, 'search')
}

export const convertObjToArray = (obj) => {
  const keys = Object.keys(obj);
  return keys.map(key => obj[key])
}

export const setTimeLimit = (time) => {
  const today = new Date();

  switch(time) {
    case 'week':
      return new Date (today.setDate(today.getDate() + 7))
    case 'month':
      return new Date (today.setMonth(today.getMonth() + 1))
    default: 
      return new Date(today.setFullYear(today.getFullYear() + 1))
  }
}


 





