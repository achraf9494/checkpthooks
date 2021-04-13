import React from 'react'

import Rating from './Rating'

const CardMovies = ({movie}) => {
    return (
        <div >
            <Rating rate={movie.rating}/>
            <img width="300" src={movie.image} alt={movie.name}/>
            <h1> {movie.name}  </h1>
            <p>{movie.date}</p>
            
            
        </div>
    )
}

export default CardMovies
