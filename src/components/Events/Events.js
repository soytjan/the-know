import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  genEventsArray = () => {
    const { info, type, onFavorite } = this.props;
    let events;
    if (type === 'event') {
      const categories = Object.keys(info);
      //think about a refactor here
      // const masterEvents = categories.reduce((obj, key) => {
      //   console.log('category objects', info[key])
      // }, {});
      // console.log(masterEvents, 'masterEvents')
      return categories.reduce((eventsArr, category) => {
        const categoryIds = Object.keys(info[category]);
        const categoryEvents = categoryIds.map(eventId => info[category][eventId]);

        return [...eventsArr, ...categoryEvents]
      }, [])
    } 
      events = info;
      const categoryIds = Object.keys(events);
      return categoryIds.map(eventId => events[eventId])
  }

  render() {
    const { info, type, onFavorite } = this.props;
    const eventArray = this.genEventsArray()
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