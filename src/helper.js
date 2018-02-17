import key from './api/key.js';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

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
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=San+Diego&app_key=${key}&category=music`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getFoodData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=San+Diego&app_key=${key}&category=food`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getCultureData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=San+Diego&app_key=${key}&category=attractions`;
    const response = await fetch(url, {mode: 'cors'});

    return await response.json();
  } catch (error) {
    throw (error)
  }
}

export const getNightlifeData = async (location) => {
  try {
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=San+Diego&app_key=${key}&category=singles_social`;
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