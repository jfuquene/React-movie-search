import React, {useState} from "react"
import './index.css';


function SearchMovies(){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()

        // const query = "Jurassic Park"
        

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
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => {
                    return <div className="card">
                        <h1>{movie.title}</h1>
                        
                        </div>
                })}
            </div>
        </>
    )
}

export default SearchMovies;