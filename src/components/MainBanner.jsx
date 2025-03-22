import React from 'react'
import { useSelector } from 'react-redux'
import VedioBackground from './VideoBackground'
import VedioTitle from './VideoTitle'

const MainBanner = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(movies === null) return ; // this is know as early return
    const mainMovies = movies[0];
    const {original_title,overview,id} = mainMovies;
  return (
    <div className=''>
        <VedioTitle title={original_title} overview={overview}/>
        <VedioBackground movieid={id}/>
    </div>
  )
}

export default MainBanner