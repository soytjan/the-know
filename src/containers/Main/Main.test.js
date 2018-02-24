import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Main />);

    expect(renderedComponent).toMatchSnapshot();
  })

  describe('genEventsArray', () => {
    it('should generate an array of all the events', () => {
      
    })
  })
})