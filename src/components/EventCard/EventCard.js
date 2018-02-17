import React from 'react';
// import event from '../../assets/event.jpg';
// import food from '../../assets/food.jpg';
// import music from '../../assets/music.jpg';
// import culture from '../../assets/culture.jpg';
// import nightlife from '../../assets/nightlife.jpg';
import './EventCard.css';

// need to look into how image is being returned
// why is it not returning the image??
const EventCard = (props) => {
  const { event, type } = props;
  const img = event.image ? 
    <img className='img-event' src={event.image.medium.url} alt={event.title} /> 
    : <div className={`img-event ${type}`}></div>;

  return (
    <article className="EventCard">
      <div className={`img-box`}>
        {img}
      </div>
      <h4>{event.title}</h4>
      <p>{event.venueName}</p>
      <p>{event.startTime}</p>
    </article>
  )
}

export default EventCard;

// <img src={imageSrc} alt={event.title} className='img-event' />