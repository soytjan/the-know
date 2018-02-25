import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertObjToArray, setTimeLimit } from '../../helper';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 'all'
    } 
  }

  convertEvents = () => {
    const { info, type } = this.props;

    if (type === 'event') {
      const categories = Object.keys(info);
      return categories.reduce((eventsArr, category) => {
        const categoryEvents = convertObjToArray(info[category]);

        return [...eventsArr, ...categoryEvents]
      }, [])
    } 
      return convertObjToArray(info);
  }

  filterEvents() {
    const { time } = this.state;
    const timeLimit = setTimeLimit(time);
    const events = this.convertEvents();

    return events.filter(event => {
      const eventDate = new Date(event.startTime);
      return eventDate < timeLimit;
    })
  }

  render() {
    const { onFavorite } = this.props;
    const events = this.filterEvents();
    const renderedEvents = events.map(event => <EventCard event={event} onFavorite={onFavorite} key={event.id}/> )


    return (
      <section className='Events'>
        <nav className='nav-time-container'> 
          <button 
            onClick={() => this.setState({ time: 'week' })}>This Week
          </button>
          <button 
            onClick={() => this.setState({ time: 'month' })}>
            This Month
          </button>
          <button 
            onClick={() => this.setState({ time: 'all' })}>All Upcoming
          </button>
        </nav>
        { renderedEvents }
      </section>
    )
  }
}

Events.propTypes = {
  info: PropTypes.object,
  type: PropTypes.string,
  onFavorite: PropTypes.func
};

export default Events;