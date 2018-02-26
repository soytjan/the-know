import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';

describe('EventCard', () => {
  let renderedComponent;
  let mockEvent;
  let mockOnFavorite;

  beforeAll(() => {
    mockEvent = {
      title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
      description: "event description",
      category: "music",
      image: null,
      url: "fake.com",
      id: "E0-001-111209195-8"
    };
  });

  beforeEach(() => {
    mockOnFavorite = jest.fn();
    renderedComponent = shallow(
      <EventCard
        event={mockEvent}
        onFavorite={mockOnFavorite}
        key={1}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should reflect UI change when event is favorited', () => {
    const mockEvent = {
      title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
      description: "event description",
      category: "music",
      image: null,
      url: "fake.com",
      id: "E0-001-111209195-8",
      isFavorited: true
    };
    const renderedComponent = shallow(
      <EventCard
        event={mockEvent}
        onFavorite={mockOnFavorite}
        key={1}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call onFavorite from props when button is clicked', () => {
    renderedComponent.find('button').simulate('click');

    expect(mockOnFavorite).toHaveBeenCalled();
  });
});