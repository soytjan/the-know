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
      const events = {'12234': {}, '5678': {}};
      const category = 'music';
      const expected = {
        type: 'ADD_EVENTS',
        events,
        category
      }

      expect(actions.addEvents(events, category)).toEqual(expected);
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