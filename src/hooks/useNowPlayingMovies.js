import { useDispatch } from "react-redux";
import { addNowPlayiyngMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
  const getNowPLayingMOvies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayiyngMovies(json.results))
    console.log(json.results,"MyNowPlayingMovies");
  }
  useEffect(() => {
    getNowPLayingMOvies() 
},[])
}

export default useNowPlayingMovies;