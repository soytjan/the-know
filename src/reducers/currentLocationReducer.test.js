import { currentLocationReducer } from './currentLocationReducer';
import * as actions from '../actions';

describe('currentLocationReducer', () => {
  let coordinates;

  beforeAll(() => {
    coordinates = {
      coordinates: {
        "lat": 39.7380371,
        "lng": -105.02651949999999
      }
    }
  });
  
  it('should return the default state', () => {
    const expected = {};

    expect(currentLocationReducer(undefined, {}))
  });

  it('ADD_CURRENT_LOCATION should return the state with a coordinates object added', () => {
    const expected = coordinates;
    const action = actions.addCurrentLocation(coordinates);

    expect(currentLocationReducer(undefined, action)).toEqual(expected);
  });
})