import React, { Component } from 'react';
import SearchMain from '../../containers/SearchMain/SearchMain';
import NavCategories from '../../containers/NavCategories/NavCategories';
import './Banner.css';

class Banner extends Component {
  handleSearchRoute = () => {
    return this.props.history.push('/home/search')
  }

  render() {
    return (
      <section className="Banner">
        <SearchMain onSearch={this.handleSearchRoute} /> 
        <NavCategories /> 
      </section>
    )
  }
}

export default Banner;