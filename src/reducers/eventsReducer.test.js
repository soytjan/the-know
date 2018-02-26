import { eventsReducer } from './eventsReducer';
import * as actions from '../actions';

describe('eventsReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(eventsReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_EVENTS should return the state with the upcoming events added', () => {
    const events = {'12234': {}, '5678': {}};
    const category = 'music';
    const action = actions.addEvents(events, category);
    const expected = { [category]: events };

    expect(eventsReducer(undefined, action)).toEqual(expected);
  });

  it('UPDATE_EVENTS should return the state with an updated favorited event', () => {
    const event = {title: 'hi', isFavorited: true, category: 'music', id: '1234'}
    const action = actions.updateEvents(event);
    const state = {
      music: {
        '1234': {title: 'hi', category: 'music', id: '1234'}
      }
    }
    const expected = {
      music: {
        '1234': {title: 'hi', isFavorited: true, category: 'music', id: '1234'}
      }
    }

    expect(eventsReducer(state, action)).toEqual(expected);
  })

  it('REMOVE_SEARCH should return state and the key search with an empty object value', () => {
    const state = {
      music: {
        '1234': {title: 'hi', category: 'music', id: '1234'}
      },
      search: {
        '456': {title: 'hi', category: 'search', id: '456'}
      }
    };
    const expected = {
      music: {
        '1234': {title: 'hi', category: 'music', id: '1234'}
      },
      search: {}
    };
    const action = actions.removeSearch();

    expect(eventsReducer(state, action)).toEqual(expected);
  })
})