import * as helper from './helper';
import keys from './api/keys.js';

describe('helper', () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  describe('fetchCityData', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          events: 'array of events'
        })
      }));
    })

    it('should call fetch with the expected params', () => {
      const location = {
        coordinates: {
          lat: 1234,
          lng: 1234
        }
      }
      const coords = location.coordinates;
  
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}`;
      const init = {mode: 'cors'};

      expect(window.fetch).not.toHaveBeenCalled();

      helper.fetchCityData(location);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.fetchCityData();
      const expected = {events: 'array of events'};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.fetchCityData();
      const expected = Error('could not get city event data');

      expect(response).rejects.toEqual(expected);
    })
  })
})
