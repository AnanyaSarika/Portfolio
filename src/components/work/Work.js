import React, { useRef } from 'react';
import './Work.css'

import Card from './work_card/Card';
import { WORK_EXPERIENCE } from './data';
import Slider from 'react-slick';
const Work = () => {
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
  <section className='exp-container' id='work'>
      <h5>Work Experience</h5>
      <div className='exp-content'>
     


        <Slider ref={slideRef} {...settings}>
      {WORK_EXPERIENCE.map((item) =>(
        <Card key={item.title} details={item}/>
      )
      )}
      </Slider>
      </div>
  </section>
  );
};

export default Work;
