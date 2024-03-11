import React from 'react';
import './card.css'
const Card = ({details}) => {
  return( 
  <div className='project-card'> 
  <h6>{details.title}</h6>
  <div className='project-skills'>{details.skills}</div>
  
  <ul>
    {details.desc.map((item)=>(
        <li key={item}>{item}</li>
    ))}
  </ul>
  
  </div>
  );
};

export default Card;
