import { favoritesReducer } from './favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer', () => {
  it('should return the default state', () => {
    const expected = [];

    expect(favoritesReducer(undefined, {})).toEqual(expected);
  })

  it('ADD_FAVORITE should return the state with the favorited event added', () => {
    const action = actions.addFavorite({ title: 'hello' });
    const expected = [ {title: 'hello'} ];

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  })

  it('REMOVE_FAVORITE should return the state with the favorited event removed', () => {
    const state = [{title: 'hello'}, {title: 'bye'}];

    const action = actions.removeFavorite({ title: 'hello' });
    const expected = [ {title: 'bye'} ];

    expect(favoritesReducer(state, action)).toEqual(expected);
  })
})