import React from 'react'
import CTA from './CTA'
import './Header.css'
const Header = () => {
  return (

    <section className='header__section'>
        <div className='container header__container'>
            <div className='header__content'>
                <h2>Stream live</h2>
                <h5>watch latest and amazing movies now</h5>
                <CTA/>
                </div>
        </div>    
    </section>
  )
}

export default Header
