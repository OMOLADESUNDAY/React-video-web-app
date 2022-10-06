import React from 'react'
import { Link } from 'react-router-dom'
import {FaWhatsapp, FaTwitter, FaFacebookMessenger} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import "./Footer.css"
import './Navbar.css'
const Footer = () => {
  return (
    <div className='container footer__container'>
        <div className='upper__footer'>
          <p className='navbar__logo'><Link className='links' to='/'>logo</Link></p>
        </div>
        <ul className="middle__footer">
          <li><Link className='links' to='/'>home</Link></li>
          <li><Link className='links' to='/login'>login</Link></li>
          <li><Link className='links' to='/movies'>movies</Link></li>
          <li><Link className='links' to='/newsletter'>newsletter</Link></li>
          <li className='links'>+234-706-925-8526</li>
          <li className='links'>sundayomoladee11@gmail.com</li>
        </ul>
        <div className="lower__footer">
          <a href="http://wa.me/07069258526" target='_blank'><FaWhatsapp className='whatsapp'/></a>
          <a href="https://www.facebook.com/omolade.sunday.75" target='_blank'><FaFacebookMessenger className='facebook'/></a>
          <a href="https://www.https://twitter.com/Omolade_Sunday1" target='_blank'><FaTwitter className='twitter'/></a>
          <a href="https://www.linkedin.com/in/sunday-omolade-6b6a69227" target='_blank'><BsLinkedin className='linkedin'/></a>
        </div>
    </div>
  )
}

export default Footer