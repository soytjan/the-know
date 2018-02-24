import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  renderEvents = () => {
    const { info, type, onFavorite } = this.props;
    if (type === 'event') {
      const categories = Object.keys(info);
      return categories.reduce((eventsArr, category) => {
        const categoryIds = Object.keys(info[category]);
        const categoryEvents = categoryIds.map(eventId => info[category][eventId]);

        return [...eventsArr, ...categoryEvents]
      }, [])
    } else {
      const categoryIds = Object.keys(info);
      return categoryIds.map(eventId => info[eventId])
    }
  }

  render() {
    const { info, type, onFavorite } = this.props;
    const eventArray = this.renderEvents()
    const renderedEvents = eventArray.map(event => {
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