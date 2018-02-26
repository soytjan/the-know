import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';

describe('Banner', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Banner />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should run this.props.history.push when handlSearchRoute is called', () => {
    const mockHistory = { push: jest.fn() };
    const renderedComponent = shallow(<Banner history={mockHistory} />);

    renderedComponent.instance().handleSearchRoute();

    expect(mockHistory.push).toHaveBeenCalled();
  });
});