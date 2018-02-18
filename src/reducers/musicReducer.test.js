import { musicReducer } from './musicReducer';
import * as actions from '../actions';

describe('musicReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(musicReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_MUSIC should return the state with the music events added', () => {
    const action = actions.addMusic([{ title: 'hello' }, { title: 'bye' }]);
    const expected = [ { title: 'hello' }, { title: 'bye' } ];

    expect(musicReducer(undefined, action)).toEqual(expected);
  });
})