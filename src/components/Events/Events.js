import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  render() {
    const { info, type, onFavorite } = this.props;
    const renderedEvents = info.map(event => {
      return <EventCard event={event} type={type} onFavorite={onFavorite} /> 
    })

    return (
      <section className='Events'>
        I'm the Events!
        { renderedEvents }
      </section>
    )
  }
}

Events.propTypes = {
  info: PropTypes.array,
  type: PropTypes.string,
  onFavorite: PropTypes.func
};

export default Events;