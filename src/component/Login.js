import React from 'react'
import { Link } from 'react-router-dom'
import { logindesigndata } from '../data/moviesData'
import './Login.css'
const Login = () => {
  return (
    <section className='container'>
        <h2 className='login__heading'>Login</h2>
        <div className='login__container'>
        <div className='hyyy'>
        <form className='form'>
                <h5>username</h5>
                <input type="text" name="username" className='login__input'/>
                <h5>password</h5>
                <input type='password' name='password' className='login__input'/>
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