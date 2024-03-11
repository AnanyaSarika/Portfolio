import React from 'react';
import './Contact.css';
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const Contact = () => {
  return <section>
    <div className='contact-container' id='contact'>
      <h5>Contact</h5>
      <div className='contact-info flex justify-center items-center mt-10'>
      <div className='mr-5'>
                        <h1 className="contact-1 ">Thank You for visiting my profile!</h1>
                        <h1 className="contact-2 ">If you have any questions, inquiries, or opportunities you'd like to discuss, feel free to reach out to me.</h1>
                        <div className='email'>
                            <BiLogoGmail className='mail-logo' />
                            <h1><a href='mailto:ananyasarika262@gmail.com' target="_blank">ananyasarika262@gmail.com</a></h1>
                        </div>
                        <div className=' linkedin'>
                            <BsLinkedin className='linkedIn-logo'/>
                            <h1><a href='https://www.linkedin.com/in/ananya-sarika-bb8647213/' target="_blank">Ananya_Sarika</a></h1>
                        </div>
                        <div className='github'>
                            <BsGithub className='github-logo'/>
                            <h1><a href='https://github.com/AnanyaSarika' target="_blank">AnanyaSarika</a></h1>
                        </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Contact;
