import React from 'react'
import { useRef } from 'react'
import './Newsletter.css'
const Newsletter = () => {
  const subscribeRef=useRef('')
  const subscribeHandler=(e)=>{
    e.preventDefault()
    console.log(subscribeRef.current.value)
    e.target.reset()
    window.location='/'
  }
  return (
    <section className='container newsletter__container'>
    <div className='newsletter__content_container'>
      <h2>Get update about latest movies</h2>
      <p>you can now get update on movies and other related content</p>
      <form action="" onSubmit={subscribeHandler} className='subscribe__form'>
        <input type="email" placeholder='your email' ref={subscribeRef} required/>
        <button className=' subscribe' type='submit'>subscribe</button>
      </form>
    </div>
      
    </section>
  )
}

export default Newsletter