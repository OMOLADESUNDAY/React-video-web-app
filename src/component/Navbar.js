import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMenu } from 'react-icons/bi';
import {RiServiceLine} from "react-icons/ri";
import {TiTimes} from 'react-icons/ti';
import { useRef } from 'react';
import './Navbar.css'
const Navbar = () => {
  const navRef=useRef()

  const showNavbar=()=>{
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
      <div className='navbar__con'>
            <div className='container navbar__container'>
            <div className='navbar__logo'>logo</div>
          <div className='navbar__list_item_container'>
              <ul className='list__item' ref={navRef}>
              <li><Link to='/' className='list__items'><AiOutlineHome className='navbar__icons'/></Link></li>
              <li><Link to='/user' className='list__items'><AiOutlineUser className='navbar__icons'/></Link></li>
              <li><Link to='/movies' className='list__items'><BiBook className='navbar__icons'/></Link></li>
              <li><Link to='/newsletter' className='list__items'><RiServiceLine className='navbar__icons'/></Link></li>
              <button className='exit_btn nav_close_btn' onClick={showNavbar}><TiTimes className='navbar__icons close_nav_icon'/></button>
        </ul>
      <button className='exit_btn' onClick={showNavbar}><BiMenu className='navbar__icons'/></button>
      </div>
      
      </div>
      </div>
  )
}

export default Navbar