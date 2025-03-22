import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useMoviesTrailer = (movieid)=>{
    
const dispatch = useDispatch()
//fetch trailer video & updating the store with the new trailer
  const getMoviesVideos = async () => {
   const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos", API_OPTIONS)
   const json = await data.json()
   const filterData = json.results.filter((vedio)=> vedio.type === 'trailer')
   const trailer = filterData.length ? filterData[0] : json.results[0]
   dispatch(addTrailerVideo(trailer))
  }
  useEffect(() => {
    getMoviesVideos()
  }, [])
  
}

export default useMoviesTrailer;