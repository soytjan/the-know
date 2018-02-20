import { locationReducer } from './locationReducer';
import * as actions from '../actions';

describe('locationReducer', () => {
  it('should return the default state', () => {
    const expected = {};

    expect(locationReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_LOCATION should return the state with a location object added', () => {
    const location = {
      address: "Denver, CO, USA",
      coordinates: {
        "lat": 39.7392358,
        "lng": -104.990251
      }
    }
    const action = actions.addLocation(location);
    const expected = {
      address: "Denver, CO, USA",
      coordinates: {
        "lat": 39.7392358,
        "lng": -104.990251
      }
    };

    expect(locationReducer(undefined, action)).toEqual(expected);
  });
})