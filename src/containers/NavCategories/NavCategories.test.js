import React from 'react';
import { shallow } from 'enzyme';
import { mockEventData, mockCleanGeocodeData } from '../../mockData';
import { NavCategories, mapStateToProps, mapDispatchToProps } from './NavCategories';

describe('NavCategories', () => {
  let renderedComponent;
  let mockAddEvents;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockEventData)
    }));
    mockAddEvents = jest.fn();
    renderedComponent = shallow(
      <NavCategories 
        addEvents={mockAddEvents}
        location={mockCleanGeocodeData}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = {
      location: mockCleanGeocodeData
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
    expect(mapped.location).toEqual(mockCleanGeocodeData);
  });

  it('should call the dispatch function when addEvents is called from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addEvents();

    expect(mockDispatch).toHaveBeenCalled();
  });
});