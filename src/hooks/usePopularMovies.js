import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const usePopularMovies = () =>{
    const dispatch = useDispatch()
  const getPopularMOvies = async ()=>{
    const data = await fetch( 'https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
    console.log(json.results,"PopularMovies");
  }
  useEffect(() => {
    getPopularMOvies() 
},[])
}

export default usePopularMovies;