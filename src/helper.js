import keys from './api/keys.js';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

// if this gets really big think about organize api calls into their own api files
export const getGeoLocation = async () => {
  try {
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${keys.googleMapsApiKey}`
    const response = await fetch(url, {
      method: 'POST',
      header: { 'content-type': 'application/json' }
     })

    return response;
  } catch (error) {
    throw (error);
  }
}

export const initialFetchWithCoords = async (coords) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}`;
    const response = await fetch(url, {mode: 'cors'});

    if (response.status > 226) {
      throw new Error('could not get city event data');
      // handleError function that handles error
    } else {
      const responseJson = await response.json();
      return responseJson
    }
  } catch (error) {
    throw (error);
  }
};

export const getCityDataWithCoords = async (location) => {
  const coords = location.coordinates;
  
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}`;
    const response = await fetch(url, {mode: 'cors'});

    if (response.status > 226) {
      throw new Error('could not get city event data');
      // handleError function that handles error
    } else {
      const responseJson = await response.json();
      return responseJson
    }
  } catch (error) {
    throw (error)
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
      return responseJson
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

// export const getCityData = async (location) => {
//   try {
//     const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&date=Future&app_key=${keys.eventfulKey}`;
//     const response = await fetch(url, {mode: 'cors'});

//     if (response.status > 226) {
//       throw new Error('could not get city event data');
//       // handleError function that handles error
//     } else {
//       return await response.json();
//     }
//   } catch (error) {
//     throw (error);
//   }
// };

// build URL function that builds out the URL 
// minimize some of the repetition
// handleError and pass in error as an argument
export const getMusicData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${keys.eventfulKey}&category=music`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getFoodData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${keys.eventfulKey}&category=food`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getCultureData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${keys.eventfulKey}&category=attractions`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getNightlifeData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${keys.eventfulKey}&category=singles_social`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const cleanEventData = (cityData) => {
  const events = cityData.events.event;

  const cleanedEvents = events.map(event => {
    return {
      title: event.title,
      description: event.description,
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
  })

  return cleanedEvents;
}