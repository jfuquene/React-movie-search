import React, {useState} from "react"
import './index.css';
import Card from "./Card"


function SearchMovies(){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()

        // const query = "Jurassic Park"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e9d64bbce5dbc782a6764a16fa7d902c&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(error) {
            console.log(error)
        }

    }


    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Search Movie:</label>
                <input type="text" name="query" className="input"  placeholder="e.i Teminator" value={query} 
                onChange={(e) => {setQuery(e.target.value)}}/>
                <button type="submit" className="button">no </button>
               
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie =>  <Card movie={movie} key={movie.id} />)}
            </div>
        </>
    )
}

export default SearchMovies;