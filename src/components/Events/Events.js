import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertObjToArray, setTimeLimit } from '../../helper';
import EventCard from '../EventCard/EventCard';
import './Events.css';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'all'
    }; 
  }

  convertEvents = () => {
    const { info, type } = this.props;

    if (!info) {
      return [];
    }

    if (type === 'event') {
      const categories = Object.keys(info);
      return categories.reduce((eventsArr, category) => {
        if (!info[category]) {
          return [...eventsArr];
        }
        const categoryEvents = convertObjToArray(info[category]);

        return [...eventsArr, ...categoryEvents];
      }, []);
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
    });
  }

  handleClick = (time) => {
    this.setState({time});
  }

  render() {
    const { onFavorite } = this.props;
    const events = this.filterEvents();
    const renderedEvents = events.map(event => <EventCard event={event} onFavorite={onFavorite} key={event.id}/>);

    return (
      <section className='Events'>
        <nav className='nav-time-container'> 
          <button 
            onClick={() => this.handleClick('week')}
            className='time-btn'
          >
            THIS WEEK
          </button>
          <button 
            onClick={() => this.handleClick('month')}
            className='time-btn'
          >
            THIS MONTH
          </button>
          <button 
            onClick={() => this.handleClick('all')}
            className='time-btn'
          >
            ALL UPCOMING
          </button>
        </nav>
        <section className='events-cont'>
          { renderedEvents }
        </section>
      </section>
    );
  }
}

Events.propTypes = {
  info: PropTypes.object,
  type: PropTypes.string,
  onFavorite: PropTypes.func
};

export default Events;