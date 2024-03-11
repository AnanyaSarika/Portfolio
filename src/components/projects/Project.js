import React, { useRef } from 'react';
import './project.css'

import Card from './project_cards/Card';
import { PROJECT_DATA } from './data';
import Slider from 'react-slick';
const Project = () => {
  const slideRef =useRef();

  const settings = {
    dots: false,
    infinite : false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
      {
        breakpoint: 769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1
        },
      },
    ],
  };

  return( 
  <section className='project-container' id='project'>
      <h5>Projects</h5>
      <div className='project-details'>
     


        <Slider ref={slideRef} {...settings}>
      {PROJECT_DATA.map((item) =>(
        <Card key={item.title} details={item}/>
      )
      )}
      </Slider>
      </div>
  </section>
  );
};

export default Project;
