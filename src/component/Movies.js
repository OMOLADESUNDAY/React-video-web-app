import React from 'react';
import  { useEffect, useState } from 'react';
import "./Movies.css";
import defaultImg from '../image/jon-tyson-A-obUh61bKw-unsplash.jpg';
import PropTypes from 'prop-types'
import { useRef } from 'react';
import {FcSearch} from 'react-icons/fc'
// const OMDbapiUrl='https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr'


const Movies = () => {
  const [loading, setLoading]=useState(true)
  const [movies, setmovies]= useState([])
  const [error,setError]=useState(false)
  const [searchMovie,setSearchMovie]=useState('')
  const searchRef=useRef('')
  
  const searchHandler=(e)=>{
    e.preventDefault()
    setSearchMovie(searchRef.current.value)
    e.target.reset()
  }
  const initalLoadingArray=['man','woman','guy','trending','book','game','car','aqua']
  const randomDataFromInitialLoadingArray=initalLoadingArray[Math.floor(Math.random()*initalLoadingArray.length)]
  const RapidApiUrl=`https://www.omdbapi.com/?i=tt3896198&apikey=ae13f309&s=${searchMovie || randomDataFromInitialLoadingArray}`
  const getMovies= async()=>{
    try {
      const response= await fetch(RapidApiUrl)
      const movies= await response.json()
      setLoading(false)
      setmovies(movies.Search)  
      console.log(movies.Search)
    } catch (error) {
      setError(true)
      console.log(error)
      
    }
    
  }
  useEffect(()=>{
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchMovie])


  if (loading) {
      return(
        <div className='loading__center'>
          <div className="ring"></div>
          <span className="loading">Loading</span>
        </div>
        
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
        <form className='search__form' action="" onSubmit={searchHandler}>
        <label htmlFor="search">
        </label>
        <div className='searchandicon__container'>
          <input type="search" ref={searchRef} name="search" id="search" />
          <button type='submit' className='search__btn'> <FcSearch className='movie__search_icon'/> </button>
        </div>
        
        </form>
       
        <div className='container movie__container'>
        {movies.map((movie)=>{
          const imgUrl=movie.Poster 
          return(
            <article className='movie__item' key={movie.imdbID}>
              <img src={imgUrl ==='N/A' ? defaultImg : imgUrl} alt="" className='movies__image'/>
                <small>{movie.Year}</small>
                <p className='movies__title'>{movie.Title}</p>
            </article>
          )
        })}
         
        </div>
    </section>
    )
  }
  
        
  }
  Movies.propTypes={
    Poster:PropTypes.string.isRequired,
    Title:PropTypes.string.isRequired,
    
  }
  Movies.defaultProps={
    Title:"missing title",
    Poster:defaultImg
  }
export default Movies