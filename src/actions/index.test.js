import * as actions from './index';

describe('actions', () => {
  describe('addLocation', () => {
    it('should return a type of ADD_LOCATION with a single location as a string', () => {
      const location = 'Denver';
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