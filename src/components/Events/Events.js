import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertObjToArray, setTimeLimit } from '../../helper';
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
    const array = this.genEventsArray();

    this.setState({events: array})
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.info !== nextProps.info ) {
  //     console.log('component will receive props')
  //     const newEvents = convertObjToArray(nextProps.info)
  //     console.log('newArray', newEvents)
  //     this.setState({events: newEvents})
  //     console.log('state was set')
  //   }
  // }

  genEventsArray = () => {
    const { info, type } = this.props;
    console.log(info)
    if (type === 'event') {
      const categories = Object.keys(info);
      return categories.reduce((eventsArr, category) => {
        const categoryEvents = convertObjToArray(info[category]);

        return [...eventsArr, ...categoryEvents]
      }, [])
    } 
      return convertObjToArray(info);
  }

  filterEvents(eventArray, time) {
    const timeLimit = setTimeLimit(time);
    const filtered = eventArray.filter(event => {
      const eventDate = new Date(event.startTime);
      return eventDate < timeLimit;
    })

    return filtered
  }

  renderEvents = (time) => {
    const { onFavorite } = this.props;
    const filteredEvents = this.getFilteredEventsArray(time)

    const events = filteredEvents.map(event => {
      return <EventCard event={event} onFavorite={onFavorite} /> 
    })

    return events;
  }

  getFilteredEventsArray = (time) => {
    const eventArray = this.genEventsArray();
    const filteredEvents = this.filterEvents(eventArray, time);
   
    this.setState({events: filteredEvents})
    // return filteredEvents;
  }

  render() {
    const { onFavorite } = this.props;
    const renderedEvents = this.state.events.map(event => {
      return <EventCard event={event} onFavorite={onFavorite} /> 
    })
    // const renderedEvents = this.renderEvents('all');

    return (
      <section className='Events'>
        <nav className='nav-time-container'>
          <button 
            onClick={() => this.getFilteredEventsArray('week')}>This Week
          </button>
          <button 
            onClick={() => this.getFilteredEventsArray('month')}>
            This Month
          </button>
          <button 
            onClick={() => this.getFilteredEventsArray('all')}>All Upcoming
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