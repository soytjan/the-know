import React from 'react';
import './EventCard.css';

// need to look into how image is being returned
// why is it not returning the image??
const EventCard = (props) => {
  const { event, type } = props;
  const imageSrc = event.image ? event.img : `./${type}.jpg`;

  return (
    <article className="EventCard">
      <div className='img-box'>
        <img src={imageSrc} alt={event.title} className='img-event' />
      </div>
      <h4>{event.title}</h4>
      <p>{event.venueName}</p>
      <p>{event.description}</p>
      <p>{event.startTime}</p>
    </article>
  )
}

export default EventCard;