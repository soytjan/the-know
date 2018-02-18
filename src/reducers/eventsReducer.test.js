import { eventsReducer } from './eventsReducer';
import * as actions from '../actions';

describe('eventsReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(eventsReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_EVENTS should return the state with the upcoming events added', () => {
    const action = actions.addEvents([{ title: 'hello' }, { title: 'bye' }]);
    const expected = [ { title: 'hello' }, { title: 'bye' } ];

    expect(eventsReducer(undefined, action)).toEqual(expected);
  });
})