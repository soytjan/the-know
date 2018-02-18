import React from 'react';
import PropTypes from 'prop-types';
// import event from '../../assets/event.jpg';
// import food from '../../assets/food.jpg';
// import music from '../../assets/music.jpg';
// import culture from '../../assets/culture.jpg';
// import nightlife from '../../assets/nightlife.jpg';
import './EventCard.css';

const EventCard = (props) => {
  const { event, type, onFavorite } = props;
  const favorited = event.isFavorited ? 'favorited' : '';
  const img = event.image ? 
    <img className='img-event' src={event.image.medium.url} alt={event.title} /> 
    : <div className={`img-event ${type}`}></div>;

  return (
    <article className={`EventCard ${favorited}`}>
      <div className={`img-box`}>
        {img}
      </div>
      <div>
        <h4>{event.title}</h4>
        <p>{event.venueName}</p>
        <p>{event.startTime}</p>
        <div className='btn-cont'>
          <button 
            className='btn-fav'
            onClick={() => onFavorite(event, type)}
          >
            <i className="far fa-heart"></i>
          </button>
          <button className='btn-see-more'>SEE MORE</button>
        </div>
      </div>
    </article>
  )
}

EventCard.propTypes = {
  event: PropTypes.object,
  type: PropTypes.string,
  onFavorite: PropTypes.func
};

export default EventCard;
