import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchMain from '../../containers/SearchMain/SearchMain';
import NavCategories from '../../containers/NavCategories/NavCategories';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './Banner.css';

class Banner extends Component {
  handleSearchRoute = () => {
    return this.props.history.push('/home/search');
  };

  handleChangeLocationRoute = () => {
    return this.props.history.push('/');
  };

  render() {
    return (
      <section className="Banner">
        <SearchMain onSearch={this.handleSearchRoute} />
        <ErrorBoundary> 
          <NavCategories /> 
        </ErrorBoundary>
      </section>
    );
  }
}

Banner.propTypes = {
  history: PropTypes.object
};

export default Banner;