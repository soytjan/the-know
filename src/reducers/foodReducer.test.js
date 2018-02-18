import { foodReducer } from './foodReducer';
import * as actions from '../actions';

describe('foodReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(foodReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_FOOD should return the state with the food events added', () => {
    const action = actions.addFood([{ title: 'hello' }, { title: 'bye' }]);
    const expected = [ { title: 'hello' }, { title: 'bye' } ];

    expect(foodReducer(undefined, action)).toEqual(expected);
  });
})