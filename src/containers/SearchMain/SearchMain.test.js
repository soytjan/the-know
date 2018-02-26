import React from 'react';
import { shallow } from 'enzyme';
import { mockEventData, mockCleanGeocodeData, mockCleanSearchData } from '../../mockData';
import { fetchAndCleanCategoryEventData } from '../../helper';
import { SearchMain, mapStateToProps, mapDispatchToProps } from './SearchMain';

describe('SearchMain', () => {
  let renderedComponent;
  let mockAddEvents;
  let mockRemoveSearch;
  let mockOnSearch;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockEventData)
    }));
    mockAddEvents = jest.fn()
    mockRemoveSearch = jest.fn();
    mockOnSearch = jest.fn();
    renderedComponent = shallow(
      <SearchMain 
        addEvents={mockAddEvents}
        location={mockCleanGeocodeData}
        removeSearch={mockRemoveSearch}
        onSearch={mockOnSearch}
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      location: mockCleanGeocodeData,
    }
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
    expect(mapped.location).toEqual(mockCleanGeocodeData);
  })

  it('should call the dispatch function when addEvents is called from MDTP', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addEvents();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should call the dispatch function when removeSearch is called from MDTP', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeSearch();

    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleChange', () => {
    it('should update location state on input change', () => {
      const mockEvent = { target: { value: 'abc', name: 'location' }};
      const expected = 'abc';

      renderedComponent.instance().handleChange(mockEvent);

      renderedComponent.update();

      expect(renderedComponent.state().location).toEqual(expected);
    });

    it('should update eventSearch state on input change', () => {
      const mockEvent = { target: { value: 'soooo tired', name: 'eventSearch' }};
      const expected = 'soooo tired';

      renderedComponent.instance().handleChange(mockEvent);

      renderedComponent.update();

      expect(renderedComponent.state().eventSearch).toEqual(expected);
    })
  });

  describe('handleSubmit', () => {
    let mockEvent;

    beforeAll(() => {
      mockEvent = { preventDefault: jest.fn() }
    })

    it('should call fetch', () => {
      renderedComponent.instance().handleSubmit(mockEvent);

      expect(window.fetch).toHaveBeenCalled();
    })

    it('should remove what was in Search before', async () => {
      await renderedComponent.instance().handleSubmit(mockEvent);

      expect(mockRemoveSearch).toHaveBeenCalled();
    })

    it('should call addEvents with the expected params', async () => {
      const mockSearchedEvents = mockCleanSearchData;
      
      await renderedComponent.instance().handleSubmit(mockEvent);

      expect(mockAddEvents).toHaveBeenCalledWith(mockSearchedEvents, 'search');
    })

    it('should call onSearch to reroute page', async () => {
      await renderedComponent.instance().handleSubmit(mockEvent);

      expect(mockOnSearch).toHaveBeenCalled();
    })
  });  
})