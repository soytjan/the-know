import React from 'react';
import { shallow } from 'enzyme';
import { mockGeolocationData } from '../../mockData';
import { Welcome, mapDispatchToProps } from './Welcome';

describe('Welcome', () => {
  let renderedComponent;
  let mockHistory;
  let mockAddCurrentLocation;  

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockGeolocationData)
    }));
    mockHistory = { push: jest.fn() };
    mockAddCurrentLocation = jest.fn();
    renderedComponent = shallow(
      <Welcome 
        history={mockHistory}
        addCurrentLocation={mockAddCurrentLocation}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should call the dispatch function when addCurrentLocation is called from MDTP', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addCurrentLocation();

    expect(mockDispatch).toHaveBeenCalled();
  });

  it('should fetch current location on componentDidMount', () => {
    renderedComponent.instance().componentDidMount();

    expect(window.fetch).toHaveBeenCalled();
  });

  describe('handleReroute', () => {
    it('should call this.props.history.push when handleReroute is called', () => {
      renderedComponent.instance().handleReroute();

      expect(mockHistory.push).toHaveBeenCalled();
    });
  });
});