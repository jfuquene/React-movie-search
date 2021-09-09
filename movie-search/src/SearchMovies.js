import React, {useState} from "react"
import './index.css';


function SearchMovies(){


    const searchMovies = async (e) => {
        e.preventDefault()

        console.log("i am submitted")

        const query = "Jurassic Park"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e9d64bbce5dbc782a6764a16fa7d902c&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.results)
        } catch(error) {
            console.log(error)
        }
    }


    return(
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Search Movie:</label>
            <input type="text" name="query" className="input"  placeholder="e.i Teminator" />
            <button type="submit" className="button">Search</button>
    </form>
    )
}

export default SearchMovies;