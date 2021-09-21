import React from "react"

function Card(props){

    return(
        <div className="card" key={props.movie.id}>
            <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} alt={props.movie.title}/>
            <div className="card--content">
            <h1 className="card--tilte">{props.movie.title}</h1>
            <p><small>Release Date: {props.movie.release_date}</small></p>
            <p><small>Rating: {props.movie.vote_average}</small></p>
            <p className="card-desc">{props.movie.overview}</p>
            </div>
                        
        </div>
    )

}

export default Card