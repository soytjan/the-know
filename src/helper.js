import key from './api/key.js';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

export const getGeoLocation = async (location) => {
   return await navigator.geolocation.getCurrentPosition(success, error);
    // const geo = await navigator.geolocation.getCurrentLocation(position => position.coords)
}

const returnCoords = (position) => {
  return position.coords;
}

const success = async (pos) => {
  const crd = await pos.coords;
  const latitude = crd.latitude;
  const longitude = crd.longitude;
  console.log({ latitude, longitude });
  debugger;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  return {latitude, longitude};

}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const returnPositionError = (error) => {
  return console.log(error);
}

export const getCityData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&date=Future&app_key=${key}`;
    const response = await fetch(url, {mode: 'cors'});

    if (response.status > 226) {
      throw new Error('could not get city event data');
    } else {
      return await response.json();
    }
  } catch (error) {
    throw (error);
  }
};

export const getMusicData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${key}&category=music`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getFoodData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${key}&category=food`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getCultureData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${key}&category=attractions`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getNightlifeData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&app_key=${key}&category=singles_social`;
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