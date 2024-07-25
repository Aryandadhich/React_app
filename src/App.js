import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";

import SearchIcon from './search.svg'
import './App.css';

const Api_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=e2478c8'


const movie1 = {
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        //this will call our api 
        const response = await fetch(`${Api_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.search);
    }

    useEffect(() => {
        searchMovies("Superman")
    }, []);
    return (
        <div className="app">
            <h1>MovieHub</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie ={movie} />
                        ))}
                        </div>
                    ) :(
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}


export default App;