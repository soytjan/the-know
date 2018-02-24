import { favoritesReducer } from './favoritesReducer';
import * as actions from '../actions';

describe('favoritesReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(favoritesReducer(undefined, {})).toEqual(expected);
  })

  it('ADD_FAVORITE should return the state with the favorited event added', () => {
    const event = { title: 'hello', category: 'music', id: '1234', isFavorited: true };
    const action = actions.addFavorite(event);
    const expected = {'1234': { title: 'hello', category: 'music', id: '1234', isFavorited: true }};

    expect(favoritesReducer(undefined, action)).toEqual(expected);
  })

  it('REMOVE_FAVORITE should return the state with the favorited event removed', () => {
    const event = { title: 'hello', category: 'music', id: '1234', isFavorited: false };
    const state = {'1234': { title: 'hello', category: 'music', id: '1234' }};
    const action = actions.removeFavorite(event);
    const expected = {};

    expect(favoritesReducer(state, action)).toEqual(expected);
  })
})