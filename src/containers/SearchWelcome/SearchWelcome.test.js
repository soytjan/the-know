import React from 'react';
import { shallow } from 'enzyme';
import { mockGeocodeData, mockCleanGeocodeData } from '../../mockData';
import { SearchWelcome } from './SearchWelcome';

describe('SearchWelcome', () => {
  let renderedComponent;
  let mockAddEvents;
  let mockAddLocation;
  let mockOnReroute;
  let mockCurrentLocation;
  
  beforeAll(() => {
    mockCurrentLocation = {
      coordinates: {
        "lat": 39.7380371,
        "lng": -105.02651949999999
      }
    }
  })

  beforeEach(() => {
    mockAddEvents = jest.fn();
    mockAddLocation = jest.fn();
    mockOnReroute = jest.fn();
    renderedComponent = shallow(
      <SearchWelcome
        currentLocation={mockCurrentLocation} 
        addEvents={mockAddEvents}
        addLocation={mockAddLocation}
        onReroute={mockOnReroute}
      />
    );
  })

  it.skip('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should update state on input change', () => {
    const mockEvent = { target: { value: 'abc', name: 'location' }};
    const expected = 'abc';

    renderedComponent.instance().handleChange(mockEvent);

    renderedComponent.update();

    expect(renderedComponent.state().location).toEqual(expected);
  });

  it('should fetch and clean coordinates for location on handleSubmit', () => {
    
  });

  it('should fetch and clean upcoming events for location on submit', () => {

  });

  it('should call addEvents to store on submit', () => {

  });

  it('should call addLocation to store on submit', () => {

  });

  it('should set location in local storage on submit', () => {

  });

  it('should call onReroute on submit', () => {

  });

  it('should fetch and clean event data based on currentLocation', () => {

  });

})