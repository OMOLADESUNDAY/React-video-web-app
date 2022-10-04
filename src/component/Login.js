import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { logindesigndata } from '../data/moviesData'
import './Login.css'
const Login = () => {
  const usernameRef=useRef('')
  const passwordRef=useRef('')

  const loginSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(usernameRef.current.value)
    console.log(passwordRef.current.value)
    e.target.reset()
  }
  return (
    <section className='container'>
        <h2 className='login__heading'>Login</h2>
        <div className='login__container'>
        <div className='hyyy'>
        <form className='form' onSubmit={loginSubmitHandler}>
                <h5>username</h5>
                <input type="text" name="username" ref={usernameRef} className='login__input'/>
                <h5>password</h5>
                <input type='password' ref={passwordRef} name='password' className='login__input'/>
                <button className='btn login__submit'>Login</button>
                <p>Create Accout <Link to='/register' className='login__register_redirect'>sign up</Link></p>
                
            </form>
        </div>
            
        <article className='login__img_article'>
            <img alt='' src={logindesigndata.bgimg}/>
        </article>
    </div>
    </section>
    
  )
}

export default Login