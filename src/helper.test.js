import * as helper from './helper';
import keys from './api/keys';
import { 
  mockEventData, 
  mockCleanEventData,
  mockEventDataArray, 
  mockGeocodeData, 
  mockCleanGeocodeData,
  mockGeolocationData,
  mockCleanSearchData 
} from './mockData';

describe('helper', () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  
  describe('getGeoLocation', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockGeolocationData)
      }));
    })

    it('should call fetch with the expected params', () => {
      const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${keys.googleMapsApiKey}`;
      const init = {
        method: 'POST',
        header: { 'content-type': 'application/json' }
      }

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getGeoLocation();

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    });

    it('should return an object if status code is ok', () => {
      const response = helper.getGeoLocation(location);
      const expected = {
        coordinates: {
          "lat": 39.7380371,
          "lng": -105.02651949999999
        }
      };

      expect(response).resolves.toEqual(expected);
    });

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.getGeoLocation();
      const expected = Error('could not get current location coordinates');

      expect(response).rejects.toEqual(expected);
    });
  })

  describe('getAddressCoords', () => {
    let location;

    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockGeocodeData)
      }));

      location = 'Denver';
    })

    it('should call fetch with the expected params', () => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${keys.googleMapsApiKey}`;
      
      expect(window.fetch).not.toHaveBeenCalled();

      helper.getAddressCoords(location);

      expect(window.fetch).toHaveBeenCalledWith(url);

    });

    it('should return an object if status code is ok', () => {
      const response = helper.getAddressCoords(location);
      const expected = mockGeocodeData;

      expect(response).resolves.toEqual(expected);
    })

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.getAddressCoords(location);
      const expected = Error('could not get address coordinates');

      expect(response).rejects.toEqual(expected);
    })
  })

  describe('cleanAddressCoords', () => {
    it('should take in geocode response and return a clean location object', () => {
      const expected = mockCleanGeocodeData;
      const address = mockGeocodeData;

      expect(helper.cleanAddressCoords(address)).toEqual(expected);
    })
  })

  describe('fetchAndCleanGeocodeLocation', () => {
    let location;

    beforeAll(() => {
      location = 'Denver';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockGeocodeData)
      }));
    })

    it('should make fetch call', () => {
      helper.fetchAndCleanGeocodeLocation(location);

      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return clean data object', async () => {
      const expected = mockCleanGeocodeData;
      const received = await helper.fetchAndCleanGeocodeLocation(location)
      expect(received).toEqual(expected);
    });
  })

  describe('cleanEventDataToStore', () => {
    it('should return clean data when event datas and event category is passed in', () => {
      const data = mockEventData;
      const category = 'music';
      const expected = mockCleanEventData;
      expect(helper.cleanEventDataToStore(data, category)).toEqual(expected)
    })
  })

  describe('fetchAndCleanCategoryEventData', () => {
    let location;

    beforeAll(() => {
      location = {
        address: "Denver, CO, USA",
        coordinates: {
          "lat": 39.7392358,
          "lng": -104.990251
        }
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockEventData)
      }));
    })

    it('should make a fetch call', () => {
      helper.fetchAndCleanCategoryEventData('music', location);

      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return clean data object', async () => {
      const expected = mockCleanEventData;
      const received = await helper.fetchAndCleanCategoryEventData('music', location)
      expect(received).toEqual(expected);
    });
  })

  describe('genApiUrl', () => {
    let location;

    beforeAll(() => {
      location = {
        coordinates: {
          lat: 1234,
          lng: 1234
        }
      }
    })

    it('should return music url when type is music', () => {
      const expected = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=1234,1234&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=music&date=Future`;
      const type = 'music';

      expect(helper.genApiUrl(type, location)).toEqual(expected);
    });

    it('should return food url when type is food', () => {
      const expected = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=1234,1234&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=food&date=Future`;
      const type = 'food';

      expect(helper.genApiUrl(type, location)).toEqual(expected);
    });

    it('should return culture url when type is culture', () => {
      const expected = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=1234,1234&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=attractions&date=Future`;
      const type = 'culture';

      expect(helper.genApiUrl(type, location)).toEqual(expected);
    });

    it('should return nightlife url when type is nightlife', () => {
      const expected = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=1234,1234&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=singles_social&date=Future`;
      const type = 'nightlife';

      expect(helper.genApiUrl(type, location)).toEqual(expected);
    });
  })

  describe('getCategoryData', () => {
    let location;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          events: 'array of events'
        })
      }));
    })

    beforeAll(() => {
      location = {
        address: "Denver, CO, USA",
        coordinates: {
          "lat": 39.7392358,
          "lng": -104.990251
        }
      }
    })

    it('should call fetch with expected music params when the type is music', () => {
      const coords = location.coordinates;
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=music&date=Future`;
      const init = {mode: 'cors'};
      const type = 'music';

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getCategoryData(type, location);

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    });

    it('should call fetch with expected food params when the type is food', () => {
      const coords = location.coordinates;
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=food&date=Future`;
      const init = {mode: 'cors'};
      const type = 'food';

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getCategoryData(type, location);

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    });

    it('should call fetch with expected culture params when the type is culture', () => {
      const coords = location.coordinates;
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=attractions&date=Future`;
      const init = {mode: 'cors'};
      const type = 'culture';

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getCategoryData(type, location);

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    });

    it('should call fetch with expected nightlife params when the type is nightlife', () => {
      const coords = location.coordinates;
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?......&where=${coords.lat},${coords.lng}&within=25&&app_key=${keys.eventfulKey}&page_size=20&category=singles_social&date=Future`;
      const init = {mode: 'cors'};
      const type = 'nightlife';

      expect(window.fetch).not.toHaveBeenCalled();

      helper.getCategoryData(type, location);

      expect(window.fetch).toHaveBeenCalledWith(url, init);
    })

    it('should return an object if status code is ok', () => {
      const response = helper.getCategoryData('music',location);
      const expected = {events: 'array of events'};

      expect(response).resolves.toEqual(expected);
    })

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.getCategoryData('music',location);
      const expected = Error('could not get city event data');

      expect(response).rejects.toEqual(expected);
    })
  })

  describe('fetchSearchData', () => {
    let location;
    let keywords;

    beforeAll(() => {
      location = mockCleanGeocodeData;
      keywords = 'dranks';
    })

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockEventData)
      }));
    })

    it('should call fetch with the expected params', () => {
      const coords = location.coordinates;
      const url = `${corsAnywhereUrl}http://api.eventful.com/json/events/search?...&where=${coords.lat},${coords.lng}&within=25&app_key=${keys.eventfulKey}&keywords=${keywords}&date=Future`;
      
      helper.fetchSearchData(keywords, location)

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('should return an object if status code is ok', () => {
      const response = helper.fetchSearchData(keywords,location);
      const expected = mockEventData;

      expect(response).resolves.toEqual(expected);
    })

    it('should throw an error if status code is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const response = helper.fetchSearchData(keywords, location);
      const expected = Error('could not find what you are looking for');

      expect(response).rejects.toEqual(expected);
    })
  })

  describe('fetchAndCleanSearchData', () => {
    let location;

    beforeAll(() => {
      location = mockCleanGeocodeData;
    })

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockEventData)
      }));
    })

    it('should make a fetch call', () => {
      helper.fetchAndCleanSearchData('music', location);

      expect(window.fetch).toHaveBeenCalled();
    });

    it('should return clean data object', async () => {
      const expected = mockCleanSearchData;
      const received = await helper.fetchAndCleanSearchData('music', location)
      
      expect(received).toEqual(expected);
    });
  })

  describe('convertObjToArray', () => {
    it('should convert an object passed in to an array', () => {
      const obj = mockCleanEventData;
      const expected = mockEventDataArray;

      expect(helper.convertObjToArray(obj)).toEqual(expected);
    })
  })

  describe('setTimeLimit', () => {
    it('should return Date in 7 days when week is passed in', () => {
      const today = new Date();
      const expected = new Date(today.setDate(today.getDate() + 7));

      expect(helper.setTimeLimit('week')).toEqual(expected);
    });

    it('should return Date in 30 days when month is passed in', () => {
      const today = new Date();
      const expected = new Date(today.setMonth(today.getMonth() + 1));

      expect(helper.setTimeLimit('month')).toEqual(expected);
    });

    it('shoudl return Date in 1 year by default', () => {
      const today = new Date();
      const expected = new Date(today.setFullYear(today.getFullYear() + 1));

      expect(helper.setTimeLimit()).toEqual(expected);
    });
  })
})
