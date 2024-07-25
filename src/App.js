import { useEffect } from 'react';

import moviecard  from './moviecard';

import './App.css';
import SearchIcon from './search.svg'

const Api_URL = 'http://www.omdbapi.com/?apikey=3746f656'


const movie1 =
{
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}
const App = () => {
    const searchMovies = async (title) => {
        //this will call our api 
        const response = await fetch(`${Api_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies("Superman")
    }, []);
    return (
        <div className="app">
            <h1>MovieHub</h1>

            <div className="search">
                <input
                    placeholder="search for movies"
                    value="Superman"
                    onChange={() => { }} />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }} />
            </div>
            <div className="container">
                <moviecard movie1 = {movie1}/>
</div>
        </div>
    );
}


export default App;