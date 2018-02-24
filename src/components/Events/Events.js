import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertObjToArray } from '../../helper';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.getFilteredEventsArray('all');
  }

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

  filterEvents(eventArray, time) {
    // move this to helper function
    // in a month
    const timeLimit = this.setTimeLimit(time);
    const filtered = eventArray.filter(event => {
      const eventDate = new Date(event.startTime);
      return eventDate < timeLimit;
    })

    return filtered
  }

  setTimeLimit(time) {
    const today = new Date();

    switch(time) {
      case 'week':
        return today.setDate(today.getDate() + 7)
      case 'month':
        return (today.setMonth(today.getMonth() + 1))
      default: 
        return new Date(today.setFullYear(today.getFullYear() + 1))
    }
  }

  getFilteredEventsArray = (time) => {
    const eventArray = this.genEventsArray();
    const filteredEvents = this.filterEvents(eventArray, time);

    this.setState({events: filteredEvents})
  }

  renderEvents() {

  }

  render() {
    const { onFavorite } = this.props;
    // const eventArray = this.genEventsArray();
    // const filteredEvents = this.filterEvents(eventArray, 'all');


    const renderedEvents = this.state.events.map(event => {
      return <EventCard event={event} onFavorite={onFavorite} /> 
    })

    return (
      <section className='Events'>
        <button onClick={() => this.getFilteredEventsArray('week')}>This Week</button>
        <button onClick={() => this.getFilteredEventsArray('month')}>This Month</button>
        <button onClick={() => this.getFilteredEventsArray('all')}>All Upcoming</button>
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