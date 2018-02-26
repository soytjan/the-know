import React from 'react';
import { shallow } from 'enzyme';
import { mockGeocodeData, mockCleanGeocodeData } from '../../mockData';
import { SearchWelcome, mapStateToProps, mapDispatchToProps } from './SearchWelcome';

describe('SearchWelcome', () => {
  let renderedComponent;
  let mockAddEvents;
  let mockAddLocation;
  let mockOnReroute;
  let mockCurrentLocation;
  
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockGeocodeData)
    }));
    mockCurrentLocation = {
      coordinates: {
        "lat": 39.7380371,
        "lng": -105.02651949999999
      }
    };
  });

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
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = {
      currentLocation: mockCurrentLocation
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
    expect(mapped.currentLocation).toEqual(mockCurrentLocation);
  });

  it('should call the dispatch function when addEvents is called from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addEvents();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call the dispatch function when addLocation is called from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addLocation();

    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleChange', () => {
    it('should update state on input change', () => {
      const mockEvent = { target: { value: 'abc', name: 'location' }};
      const expected = 'abc';

      renderedComponent.instance().handleChange(mockEvent);

      renderedComponent.update();

      expect(renderedComponent.state().location).toEqual(expected);
    });
  });

  describe('handleSubmit', () => {
    let mockEvent;

    beforeAll(() => {
      mockEvent = { preventDefault: jest.fn() };
    });

    it('should call fetch', () => {
      renderedComponent.instance().handleSubmit(mockEvent);

      expect(window.fetch).toHaveBeenCalled();
    });

    it('should call addLocation with the expected params', async () => {
      const mockGeocodeLocation = mockCleanGeocodeData;
      
      await renderedComponent.instance().handleSubmit(mockEvent);

      expect(mockAddLocation).toHaveBeenCalledWith(mockGeocodeLocation);
    });

    it('should call onReRoute', async () => {
      await renderedComponent.instance().handleSubmit(mockEvent);

      expect(mockOnReroute).toHaveBeenCalled();
    });
  });

  describe('handleCurrentLocation', () => {
    it('should call addLocation with the expected params', () => {
      renderedComponent.instance().handleCurrentLocation();

      expect(mockAddLocation).toHaveBeenCalledWith(mockCurrentLocation);
    });

    it('should call onReroute', () => {
      renderedComponent.instance().handleCurrentLocation();
      
      expect(mockOnReroute).toHaveBeenCalled();
    });
  });
});