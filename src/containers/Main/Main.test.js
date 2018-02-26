import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanEventData, mockSingleEvent } from '../../mockData';
import { Main, mapStateToProps, mapDispatchToProps } from './Main';

describe('Main', () => {
  let renderedComponent;
  let mockEvents;
  let mockFavorites;
  let mockUpdateEvents;
  let mockAddFavorite;
  let mockRemoveFavorite;

  beforeAll(() => {
    mockEvents = {...mockCleanEventData, '123': {id: '123', category: 'food', title: 'hi'}};
    mockFavorites = {"E0-001-111209195-8": {...mockSingleEvent, isFavorited: true}};
  });

  beforeEach(() => {
    mockUpdateEvents = jest.fn();
    mockAddFavorite = jest.fn();
    mockRemoveFavorite = jest.fn();
    renderedComponent = shallow(
      <Main 
        type='MUSIC'
        events={mockEvents}
        favorites={mockFavorites}
        updateEvents={mockUpdateEvents}
        addFavorite={mockAddFavorite}
        removeFavorite={mockRemoveFavorite}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should map to the store correctly', () => {
    const mockStore = {
      events: mockEvents,
      favorites: mockFavorites
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
    expect(mapped.events).toEqual(mockEvents);
    expect(mapped.favorites).toEqual(mockFavorites);
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let mapped;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mapped = mapDispatchToProps(mockDispatch);
    });

    it('should call the dispatch function when updateEvents from MDTP', () => {
      mapped.updateEvents();

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call the dispatch function when addFavorite from MDTP', () => {
      mapped.addFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call the dispatch function when removeFavorite from MDTP', () => {
      mapped.removeFavorite();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe('handleFavorites', () => {
    it('should check to see if an event in the favorites array, and add it if it is not', () => {
      const mockEvent = {'123': {id: '123', category: 'food', title: 'hi'}};

      renderedComponent.instance().handleFavorites(mockEvent);

      expect(mockAddFavorite).toHaveBeenCalled();
    });

    it('should check to see if an event in the favorites array, and remove it if it is', () => {
      renderedComponent.instance().handleFavorites(mockSingleEvent);

      expect(mockRemoveFavorite).toHaveBeenCalled();
    });

    it('should update events in the master object', () => {
      renderedComponent.instance().handleFavorites(mockSingleEvent);

      expect(mockUpdateEvents).toHaveBeenCalled();
    });
  });

  describe('addFavEvent', () => {
    it('should call addFavorite from store', () => {
      renderedComponent.instance().addFavEvent();

      expect(mockAddFavorite).toHaveBeenCalled();
    });
  });

  describe('removeFavEvent', () => {
    it('should call removeFavorite from store', () => {
      renderedComponent.instance().removeFavEvent();

      expect(mockRemoveFavorite).toHaveBeenCalled();
    });
  });
});