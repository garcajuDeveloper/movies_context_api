import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Create a Context reference
export const GenreContext = createContext();

//Create a Provider, where it's found the functions and the state
const GenreProvider = (props) => {
    //Create the Context state
    const [genreList, saveGenreList] = useState([]);

    useEffect(() => {
        const getGenreList = async () => {
            const URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=8a3ba79ac06720dd5aeccf5d6eef359f&language=en-US';
            const genreListResponse = await axios.get(URL);

            saveGenreList(genreListResponse.data.genres);
        }
        getGenreList();
    }, []);

    //Data avalaible in the components
    return(
        <GenreContext.Provider
            value={{
                genreList
            }}
        >
            {props.children}
        </GenreContext.Provider>
    )
}
export default GenreProvider;