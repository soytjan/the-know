import React from 'react';
import { shallow } from 'enzyme';
import { SearchWelcome } from './SearchWelcome';

describe('SearchWelcome', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<SearchWelcome />);
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

  it('should call findCity with the expected params on handleSubmit', () => {
    
  });
})