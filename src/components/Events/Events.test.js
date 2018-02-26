import React from 'react';
import { shallow } from 'enzyme';
import { mockCleanEventData, mockEventDataArray } from '../../mockData';
import Events from './Events';

describe('Events', () => {
  let renderedComponent;
  let mockInfo;
  let mockOnFavorite;
   
  beforeAll(() => {
    mockInfo = {
      '1': {title: 'event1', category: 'music', startTime: "2018-07-05 09:00:00", id: '1'}, 
      '2': {title: 'event2', category: 'food', startTime: "2018-02-28 09:00:00", id: '2'}, 
      '3': {title: 'event3', category: 'culture', startTime: "2018-03-20 09:00:00", id: '3'}
    };
  });

  beforeEach(() => {
    mockOnFavorite = jest.fn();
    renderedComponent = shallow(
      <Events 
        info={mockInfo}
        type='music'
        onFavorite={mockOnFavorite}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
  
  describe('convertEvents', () => {
    it('should return an array of objects with all the event objects', () => {
      const result = renderedComponent.instance().convertEvents();
      const expected = [{title: 'event1', category: 'music', startTime: "2018-07-05 09:00:00", id: '1'}, {title: 'event2', category: 'food', startTime: "2018-02-28 09:00:00", id: '2'}, {title: 'event3', category: 'culture', startTime: "2018-03-20 09:00:00", id: '3'}];
      
      expect(result).toEqual(expected);
    });

    it('should return an array of objects with all the events when a type of event are passed in', () => {
      const mockInfo = {music: mockCleanEventData};
      const renderedComponent = shallow(
        <Events 
          info={mockInfo}
          type='event'
          onFavorite={mockOnFavorite}
        />
      );
      const result = renderedComponent.instance().convertEvents();
      const expected = mockEventDataArray;

      expect(result).toEqual(expected);
    });
  });

  describe('filterEvents', () => {
    it('should return only events that are this week when time state is week', () => {
      const expected = [{title: 'event2', category: 'food', startTime: "2018-02-28 09:00:00", id: '2'}];

      renderedComponent.setState({ time: 'week' });
      expect(renderedComponent.instance().filterEvents()).toEqual(expected);
    });

    it('should return only events that are this month when time state is month', () => {
      const expected = [
        {title: 'event2', category: 'food', startTime: "2018-02-28 09:00:00", id: '2'}, 
        {title: 'event3', category: 'culture', startTime: "2018-03-20 09:00:00", id: '3'}
      ];

      renderedComponent.setState({ time: 'month' });

      expect(renderedComponent.instance().filterEvents()).toEqual(expected);
    });

    it('should return all events when time state is all', () => {
      const expected = [
        {title: 'event1', category: 'music', startTime: "2018-07-05 09:00:00", id: '1'}, 
        {title: 'event2', category: 'food', startTime: "2018-02-28 09:00:00", id: '2'}, 
        {title: 'event3', category: 'culture', startTime: "2018-03-20 09:00:00", id: '3'}
      ];
      
      expect(renderedComponent.instance().filterEvents()).toEqual(expected);
    });
  });

  describe('handleClick', () => {
    it('should set time state to week when THIS WEEK button is clicked', () => {
      expect(renderedComponent.state('time')).toEqual('all');

      renderedComponent.instance().handleClick('week');

      expect(renderedComponent.state('time')).toEqual('week');
    });

    it('should set time state to week when THIS MONTH button is clicked', () => {
      expect(renderedComponent.state('time')).toEqual('all');

      renderedComponent.instance().handleClick('month');

      expect(renderedComponent.state('time')).toEqual('month');
    });

    it('should set time state to week when THIS MONTH button is clicked', () => {
      expect(renderedComponent.state('time')).toEqual('all');

      renderedComponent.instance().handleClick('all');

      expect(renderedComponent.state('time')).toEqual('all');
    });
  });
});