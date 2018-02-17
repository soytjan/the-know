import React from 'react';
import SearchMain from '../../containers/SearchMain/SearchMain';
import NavCategories from '../../containers/NavCategories/NavCategories';
import './Banner.css';

const Banner = () => {
  return (
    <section className="Banner">
      <SearchMain /> 
      <NavCategories /> 
    </section>
  )
}

export default Banner;