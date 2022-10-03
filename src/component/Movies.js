import React from 'react';
import  { useEffect, useState } from 'react';
import "./Movies.css";
import defaultImg from '../image/jon-tyson-A-obUh61bKw-unsplash.jpg';
import PropTypes from 'prop-types'
import { useRef } from 'react';

// const OMDbapiUrl='https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr'


const Movies = () => {
  const [loading, setLoading]=useState(true)
  const [movies, setmovies]= useState([])
  const [error,setError]=useState(false)
  const searchRef=useRef()

  const getMovies= async()=>{
    const options = {
	      method: 'GET',
	      headers: {
          'X-RapidAPI-Key': '6baac5ca8emsh269cbae7243564cp19f6a4jsn5937198bb705',//isabellaalisha260@gmail.com rapid api key
		    // 'X-RapidAPI-Key': '7a1576e1d2mshff79dcb3cbb9727p1db395jsnda614f582d9b',//sundayomoladee11@gmail.com rapid api key
		    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	      }
    };
    try {
        const response= await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=man',options)
      const movies= await response.json()
      setLoading(false)
      setmovies(movies.d)
      console.log(movies.d)  
    } catch (error) {
      setError(true)
    }
    
  }
  useEffect(()=>{
    getMovies()
  },[])

  if (loading) {
      return(
        <h2>Loading</h2>
      )
  }
  else if(error){
    return(
      <h2>error</h2>
    )
  }
  else{
      return (
    <section>
        <h2 className='movie__heading'>Watch movies</h2>
        <form action="">
        <label htmlFor="search">
        </label>
        <input type="search" ref={searchRef} name="search" id="search" />
        <button>search</button></form>
       
        <div className='container movie__container'>
        {movies.map((movie)=>{
          const imgUrl= movie.i && movie.i.imageUrl 
          return(
            <article className='movie__item' key={movie.id}>
              <img src={imgUrl|| defaultImg} alt="" className='movies__image'/>
                <p className='movies__title'>{movie.l}</p>
                
            </article>
          )
        })}
         
        </div>
    </section>
    )
  }
  
        
  }
  Movies.propTypes={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
  }
  Movies.defaultProps={
    title:"missing title",
    id:'jkihtf',
    image:defaultImg
  }
export default Movies