import key from './api/key.js';

// url to use: http://api.eventful.com/rest/events/search?...&location=San+Diego&date=Future&app_key=qg9B9xnpPW5JQvXm

// http://api.eventful.com/json/events/search?...&location=San+Diego&date=Future&app_key=qg9B9xnpPW5JQvXm

// http://denver.eventful.com/events/categories#!when=next%2030%20days -- think about the categories section

export const getCityData = async () => {
  try {
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=San+Diego&date=Future&app_key=${key}`
    const response = await fetch(url, {mode: 'cors'})
    return await response.json();
  } catch (error) {
    throw (error);
  }
};

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
      url: event.url
    }
  })

  return cleanedEvents;
}