import * as helper from './helper';
import key from './api/key.js';

describe('helper', () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  describe('getCityData', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          events: 'array of events'
        })
      }));
    })

    it('should call fetch with the expected params', () => {
      const location = 'denver';
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&location=${location}&date=Future&app_key=${key}`;
      const init = {mode: 'cors'};

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getCityData(location);

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    });

    it('should return an object if status code is okay', () => {
      const response = helper.getCityData();
      const expected = {events: 'array of events'};

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.getCityData();
      const expected = Error('could not get city event data');

      expect(response).rejects.toEqual(expected);
    })
  })
})
