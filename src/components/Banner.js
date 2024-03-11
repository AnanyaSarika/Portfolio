import React from "react";
import { FaGithub, FaYoutube, FaDribble} from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
import { Button } from "react-scroll";  
import { Link } from 'react-scroll';

const Banner = () => {

    const handleResumeDownload = () => {
        // Replace 'path_to_resume.pdf' with the actual path to your PDF file
        const fileUrl = 'https://drive.google.com/file/d/1agl_mt2OVOkxdhzIIDWvOIaNNdT8Pb8j/view?usp=drive_link.pdf';

        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;

        // Set the download attribute and filename for the anchor
        link.download = 'Ananya_Resume.pdf';

        // Append the anchor to the document body
        document.body.appendChild(link);

        // Trigger the click event of the anchor to initiate download
        link.click();

        // Remove the anchor from the document body after download
        document.body.removeChild(link);
    };
    return(
        <section className="section" id="home">
            <div className="container mx-auto lg:mb-52">
                <div>
                <div className="flex justify-center items-center mt-10 lg:mt-60">
                    <div>
                        <h1 className="banner_name1  text-[25px]  lg:text-[80px] "><TypeAnimation sequence={['Hey There! ',2000]} speed={200} wrapper="span" repeat={Infinity} /><p className="emoji">&#128075;&#127995;</p></h1>
                        <h1 className="name mb-2  lg:mb-6 text-[42px] lg:text-[80px] flex justify-center">I'm Ananya Sarika</h1>
                        <h1 className="banner_name  text-[25px]  lg:text-[40px] "><TypeAnimation sequence={['Developer | ML Engineer | Musician',2000]} speed={40} wrapper="span" repeat={Infinity} /></h1>
                    </div>
                        
                </div>
                <div className="flex justify-center items-center">

                    <div className="  mt-4 flex justify-center items-center">
                        <Link to="contact"
                        smooth={true}
                        spy={true}>
                            <button className="btn btn-sm mr-7">
                                Contact Me
                            </button>
                        </Link> 
                        <button className="btn btn-sm" onClick={handleResumeDownload}>
                            Resume
                        </button>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;