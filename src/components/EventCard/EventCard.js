import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

// need to figure out regex and getting the date to look like a normal one
const EventCard = (props) => {
  const { event, onFavorite } = props;
  const favorited = event.isFavorited ? 'favorited' : '';
  const img = event.image ? 
    <img className='img-event' src={event.image.medium.url} alt={event.title} /> 
    : <div className={`img-event ${event.category}`}></div>;

  return (
    <article className={`EventCard ${favorited}`}>
      <div className={`img-box`}>
        {img}
      </div>
      <div className='event-info'>
        <div className='event-info-text'>
          <h4>{event.title}</h4>
          <p>{event.venueName}</p>
          <p>{event.startTime}</p>
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
