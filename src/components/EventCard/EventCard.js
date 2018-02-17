import React from 'react';
import './EventCard.css';

// need to look into how image is being returned
const EventCard = (props) => {
  const { event } = props;
  const image = event.image ? <img src={event.image} alt={event.title} className='img-event' /> : <div className='box'></div>

  return (
    <article className="EventCard">
      <h4>{event.title}</h4>
      {image}
      <p>{event.venueName}</p>
      <p>{event.description}</p>
      <p>{event.startTime}</p>
    </article>
  )
}

export default EventCard;