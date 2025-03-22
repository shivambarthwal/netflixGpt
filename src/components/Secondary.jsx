import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='flex flex-col gap-2 bg-[#141414]'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
  ) 
}

export default Secondary