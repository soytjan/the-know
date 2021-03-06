import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './EventCard.css';

const EventCard = (props) => {
  const { event, onFavorite } = props;
  const favorited = event.isFavorited ? 'favorited' : '';
  // const randNum = Math.floor(Math.random() * 3 + 1);
  // const imgClass = `${event.category}${randNum}`;
  // const date = event.startTime.split(' ')[0]
  const formattedDate = moment(event.startTime).add(1, 'day').format('LLL');

  return (
    <article className={`EventCard ${favorited}`}>
      <div className={`img-box`}>
        <div className={`img-event ${event.category}`}></div>
      </div>
      <div className='event-info'>
        <div className='event-info-text'>
          <h4>{event.title}</h4>
          <p>{event.venueName}</p>
          <p>{formattedDate}</p>
        </div>
        <div className='btn-cont'>
          <button 
            className='btn-fav'
            onClick={() => onFavorite(event)}
          >
            <i className="far fa-heart"></i>
          </button>
          <a href={event.url} target='_blank'>SEE MORE</a>
        </div>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
  onFavorite: PropTypes.func
};

export default EventCard;
