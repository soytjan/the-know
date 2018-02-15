import React from 'react';
import NavCategories from '../../containers/NavCategories/NavCategories';
import './Banner.css';


// need to add in conditional rendering that checks if welcome is true or false
const Banner = () => {
  return (
    <section className="banner">
      I'm a BANNER!
      <NavCategories /> 
    </section>
  )
}

export default Banner;