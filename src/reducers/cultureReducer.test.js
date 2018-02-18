import { cultureReducer } from './cultureReducer';
import * as actions from '../actions';

describe('cultureReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(cultureReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_CULTURE should return the state with the culture events added', () => {
    const action = actions.addCulture([{ title: 'hello' }, { title: 'bye' }]);
    const expected = [ { title: 'hello' }, { title: 'bye' } ];

    expect(cultureReducer(undefined, action)).toEqual(expected);
  });
})