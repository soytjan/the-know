import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertObjToArray } from '../../helper';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  genEventsArray = () => {
    const { info, type } = this.props;
    let events;
    if (type === 'event') {
      const categories = Object.keys(info);
      //think about a refactor here
      // const masterEvents = categories.reduce((obj, key) => {
      //   console.log('category objects', info[key])
      // }, {});
      // console.log(masterEvents, 'masterEvents')
      return categories.reduce((eventsArr, category) => {
        const categoryEvents = convertObjToArray(info[category]);

        return [...eventsArr, ...categoryEvents]
      }, [])
    } 
      events = info;
      return convertObjToArray(events);
  }

  render() {
    const { onFavorite } = this.props;
    const eventArray = this.genEventsArray();
    const renderedEvents = eventArray.map(event => {
      return <EventCard event={event} onFavorite={onFavorite} /> 
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