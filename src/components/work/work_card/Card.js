import React from 'react';
import './Card.css'
const Card = ({details}) => {
  return( 
  <div className='work-card'> 
  <h6>{details.title}</h6>
  <div className='work-company'>{details.company}</div>
  <div className='work-duration'>{details.date}</div>
  <ul className='work-details'>
    {details.responsibilities.map((item)=>(
        <li key={item}>{item}</li>
    ))}
  </ul>
  
  </div>
  );
};

export default Card;
