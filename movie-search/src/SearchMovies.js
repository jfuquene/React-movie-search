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
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return <div className="card" key={movie.id}>
                        <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
                        <div className="card--content">
                            <h1 className="card--tilte">{movie.title}</h1>
                            <p><small>Release Date: {movie.release_date}</small></p>
                            <p><small>Rating: {movie.vote_average}</small></p>
                            <p className="card-desc">{movie.overview}</p>
                        </div>
                        
                        </div>
                })}
            </div>
        </>
    )
}

export default SearchMovies;