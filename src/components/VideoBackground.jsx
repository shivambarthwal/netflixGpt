import React, { useEffect } from 'react'

import {  useSelector } from 'react-redux'
import useMoviesTrailer from '../hooks/useMovieTrailer'


const VedioBackground = ({movieid}) => { 
  const trailerVideo = useSelector(store => store.movies?.trailerVideo )
  useMoviesTrailer(movieid)
  return (
    <div className='w-full '>
      <iframe 
      className='w-full aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&loop=1&mute=1"}
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" 
         >
         </iframe>
    </div>
  )
}

export default VedioBackground