import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null)

  // Scroll Left & Right Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth - 100 // Adjust for smooth scrolling
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative px-6 bg-[#141414] py-4 text-white">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Scroll Buttons */}
      <button 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-black"
        onClick={() => scroll('left')}
      >
        <FaChevronLeft className="text-white text-md" />
      </button>

      <button 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-black"
        onClick={() => scroll('right')}
      >
        <FaChevronRight className="text-white  text-md" />
      </button>

      {/* Movie List Container */}
      <div ref={scrollRef} className="flex overflow-x-scroll hide-scrollbar overflow-y-hidden scroll-smooth">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path || movie?.backdrop_path}
              moviename={movie?.title}
              vote={movie?.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
