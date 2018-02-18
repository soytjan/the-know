import { nightlifeReducer } from './nightlifeReducer';
import * as actions from '../actions';

describe('nightlifeReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(nightlifeReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_NIGHTLIFE should return the state with the nightlife events added', () => {
    const action = actions.addNightlife([{ title: 'hello' }, { title: 'bye' }]);
    const expected = [ { title: 'hello' }, { title: 'bye' } ];

    expect(nightlifeReducer(undefined, action)).toEqual(expected);
  });
})