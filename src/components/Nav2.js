import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BiFolderOpen } from "react-icons/bi";

import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav2 = () => {
  return (<>
<nav className="fixed top-0 right-20 z-50 px-10" >
  <div className="container mx-auto py-8">
    <div className="flex justify-center">
      <div className="flex items-center space-x-4">

        
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center my-2"
          >
            <BiHomeAlt className='icons'/>
          </Link>

          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center my-2 "
          >
            <BiUser className='icons' />
          </Link>

          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center my-2"
          >
            <BsClipboardData className='icons'/>
          </Link>
          <Link
            to="project"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiFolderOpen className='icons'/>
          </Link>

          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center my-2"
          >
            <BsBriefcase className='icons'/>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquare className='icons'/>
          </Link>

          
          </div>
      </div>
      </div>
    </nav>

    


    
    </>
  );
};

export default Nav2;
