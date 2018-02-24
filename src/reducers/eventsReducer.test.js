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
})