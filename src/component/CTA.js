import React from 'react'
import { Link } from 'react-router-dom'
import './CTA.css'
const CTA = () => {
  return (
    <div className='Cta__container'>
        <Link to='/movies' className='btn'>Watch Now</Link>
        <Link to='/newsletter' className='btn'>Subscribe</Link>
    </div>
  )
}

export default CTA