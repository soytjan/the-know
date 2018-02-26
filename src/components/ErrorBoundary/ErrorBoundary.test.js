import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<ErrorBoundary />);

    expect(renderedComponent).toMatchSnapshot();
  });
});