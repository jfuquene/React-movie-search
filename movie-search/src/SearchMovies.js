import React from "react"


function SearchMovies(){

    return(
        <form className="form">
            <label htmlFor="query" className="label">Search Movie:</label>
            <input type="text" name="query" placeholder="e.i Teminator" />
            <button type="submit" className="button"></button>
    </form>
    )
}

export default SearchMovies;