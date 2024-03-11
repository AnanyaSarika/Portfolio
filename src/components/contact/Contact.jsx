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
                        <div className='email '>
                            <BiLogoGmail />
                            <h1>ananyasarika262@gmail.com</h1>
                        </div>
                        <div className='Linkedin justify-center items-center flex mt-3 text-[24px]'>
                            <BsLinkedin />
                            <h1>ananyasarika262@gmail.com</h1>
                        </div>
                        <div className='github justify-center items-center flex mt-3 text-[24px] '>
                            <BsGithub />
                            <h1>ananyasarika262@gmail.com</h1>
                        </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Contact;
