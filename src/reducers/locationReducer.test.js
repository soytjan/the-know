import { locationReducer } from './locationReducer';
import * as actions from '../actions';

describe('locationReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(locationReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_LOCATION should return the state with a location string added', () => {
    const action = actions.addLocation('Denver');
    const expected = 'Denver';

    expect(locationReducer(undefined, action)).toEqual(expected);
  });
})