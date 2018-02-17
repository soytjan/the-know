import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import './Events.css';

// Events.propTypes = {

// };

class Events extends Component {
  render() {
    const { info, type } = this.props;
    const renderedEvents = info.map(event => {
      return <EventCard event={event} type={type} /> 
    })

    return (
      <section className='Events'>
        I'm the Events!
        { renderedEvents }
      </section>
    )
  }
}

export default Events;