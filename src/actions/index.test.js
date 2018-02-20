import * as actions from './index';
import { getGeoLocation } from '../helper';

describe('actions', () => {
  describe('addCurrentLocation', () => {
    it('should return a type of ADD_CURRENT_LOCATION with a coordinates object', () => {
      const coordinates = {
        coordinates: {lat: 123, lng: 456}
      }
      const expected = {
        type: 'ADD_CURRENT_LOCATION',
        coordinates
      }

      expect(actions.addCurrentLocation(coordinates)).toEqual(expected);
    })
  })

  describe('currentLocationFetchData', () => {
    let mockResponse;

    beforeAll(() => {
      mockResponse = {
        "location": {
          "lat": 39.7380371,
          "lng": -105.02651949999999
        },
        "accuracy": 12489
      }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          mockResponse
        })
      }));
    })
    
    // how do I set up these tests?
    
    // it('should dispatch addCurrentLocation with the expected params if status code is ok', () => {
    //   const expectedParams = {
    //     coordinates: {
    //       "lat": 39.7380371,
    //       "lng": -105.02651949999999
    //     }
    //   }
    //   addCurrentLocation = jest.fn();
    //   actions.currentLocationFetchData();

    //   expect(actions.addCurrentLocation).toHaveBeenCalledWith(expectedParams);
    // });

    // it('should dispatch currentHasErrored if status code is not ok', () => {

    // });
  })

  describe('currentHasErrored', () => {
    it('should return a type of CURRENT_HAS_ERRORED with a boolean', () => {
      const boolean = false;
      const expected = {
        type: 'CURRENT_HAS_ERRORED',
        hasErrored: false
      }
      
      expect(actions.currentHasErrored(boolean)).toEqual(expected);
    })
  })

  describe('addLocation', () => {
    it('should return a type of ADD_LOCATION with a location object', () => {
      const location = {
        address: 'Denver, CO, USA',
        coordinates: {lat: 1234, lng: 12345}
      };
      const expected = {
        type: 'ADD_LOCATION',
        location
      }

      expect(actions.addLocation(location)).toEqual(expected);
    })
  })

  describe('addEvents', () => {
    it('should return a type of ADD_EVENTS with an array of events', () => {
      const events = [{title: 'fun'}, {title: 'times'}, {title: 'woot'}];
      const expected = {
        type: 'ADD_EVENTS',
        events
      }

      expect(actions.addEvents(events)).toEqual(expected);
    })
  })

  describe('updateEvents', () => {
    it('should return a type of UPDATE_EVENTS with an event object', () => {
      const event = {title: 'fun', isFavorited: true};
      const expected = {
        type: 'UPDATE_EVENTS',
        event
      }

      expect(actions.updateEvents(event)).toEqual(expected);
    })
  })

  describe('addMusic', () => {
    it('should return a type of ADD_MUSIC with an array of events', () => {
      const events = [{title: 'fun'}, {title: 'times'}, {title: 'woot'}];
      const expected = {
        type: 'ADD_MUSIC',
        events
      }

      expect(actions.addMusic(events)).toEqual(expected);
    })
  })

  describe('updateMusic', () => {
    it('should return a type of UPDATE_MUSIC with an event object', () => {
      const event = {title: 'fun', isFavorited: true};
      const expected = {
        type: 'UPDATE_MUSIC',
        event
      }

      expect(actions.updateMusic(event)).toEqual(expected);
    })
  })

  describe('addFood', () => {
    it('should return a type of ADD_FOOD with an array of events', () => {
      const events = [{title: 'fun'}, {title: 'times'}, {title: 'woot'}];
      const expected = {
        type: 'ADD_FOOD',
        events
      }

      expect(actions.addFood(events)).toEqual(expected);
    })
  })

  describe('updateFood', () => {
    it('should return a type of UPDATE_FOOD with an event object', () => {
      const event = {title: 'fun', isFavorited: true};
      const expected = {
        type: 'UPDATE_FOOD',
        event
      }

      expect(actions.updateFood(event)).toEqual(expected);
    })
  })

  describe('addCulture', () => {
    it('should return a type of ADD_CULTURE with an array of events', () => {
      const events = [{title: 'fun'}, {title: 'times'}, {title: 'woot'}];
      const expected = {
        type: 'ADD_CULTURE',
        events
      }

      expect(actions.addCulture(events)).toEqual(expected);
    })
  })

  describe('updateCulture', () => {
    it('should return a type of UPDATE_CULTURE with an event object', () => {
      const event = {title: 'fun', isFavorited: true};
      const expected = {
        type: 'UPDATE_CULTURE',
        event
      }

      expect(actions.updateCulture(event)).toEqual(expected);
    })
  })

  describe('addNightlife', () => {
    it('should return a type of ADD_NIGHTLIFE with an array of events', () => {
      const events = [{title: 'fun'}, {title: 'times'}, {title: 'woot'}];
      const expected = {
        type: 'ADD_NIGHTLIFE',
        events
      }

      expect(actions.addNightlife(events)).toEqual(expected);
    })
  })

  describe('updateNightlife', () => {
    it('should return a type of UPDATE_NIGHTLIFE with an event object', () => {
      const event = {title: 'fun', isFavorited: true};
      const expected = {
        type: 'UPDATE_NIGHTLIFE',
        event
      }

      expect(actions.updateNightlife(event)).toEqual(expected);
    })
  })

  describe('addFavorite', () => {
    it('should return a type of ADD_FAVORITE with an array of events', () => {
      const event = {title: 'fun'};
      const expected = {
        type: 'ADD_FAVORITE',
        event
      };

      expect(actions.addFavorite(event)).toEqual(expected);
    })
  })

  describe('removeFavorite', () => {
    it('should return a type of ADD_CULTURE with an array of events', () => {
      const event = {title: 'fun'};
      const expected = {
        type: 'REMOVE_FAVORITE',
        event
      }

      expect(actions.removeFavorite(event)).toEqual(expected);
    })
  })
})