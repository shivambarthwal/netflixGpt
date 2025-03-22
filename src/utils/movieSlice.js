import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies : null,
        trailerVideo: null,
        popularMovies:null,
        upcomingMovies: null,
        topRatedMovies: null,

    },
    reducers: {
        addNowPlayiyngMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        }
    }
})

export const { addNowPlayiyngMovies ,addTrailerVideo,addPopularMovies,addUpcomingMovies ,addTopRatedMovies} = movieSlice.actions; 
export default movieSlice.reducer;