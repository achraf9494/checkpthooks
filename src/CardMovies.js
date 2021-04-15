import React from 'react'
import {Link} from 'react-router-dom';

import Rating from './Rating'

const CardMovies = ({movie}) => {
    return (
        <div >
            <Rating rate={movie.rating}/>
            <img width="300" src={movie.image} alt={movie.name}/>
            <h1> {movie.name}  </h1>
            <p>{movie.date}</p>
            <button>
            <Link to={`/infos/${movie.name}`}>
            Movie info
            </Link>
            </button>
            
        </div>
    )
}

export default CardMovies
