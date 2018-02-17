import React from 'react';
// import event from '../../assets/event.jpg';
// import food from '../../assets/food.jpg';
// import music from '../../assets/music.jpg';
// import culture from '../../assets/culture.jpg';
// import nightlife from '../../assets/nightlife.jpg';
import './EventCard.css';

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
      <div>
        <h4>{event.title}</h4>
        <p>{event.venueName}</p>
        <p>{event.startTime}</p>
        <div className='btn-cont'>
          <button className='btn-fav'>
            <i class="far fa-heart"></i>
          </button>
          <button className='btn-see-more'>SEE MORE</button>
        </div>
      </div>
    </article>
  )
}

export default EventCard;
