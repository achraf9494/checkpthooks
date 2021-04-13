import React from 'react'
import CardMovies from '../CardMovies'

const MovieList = ({film}) => {

    return (
        <div className="movie" style={{display:'flex', flexWrap:'wrap'}} > 
            {film.map(el => <CardMovies movie={el} />  )}
                
            
        </div>
    )
}

export default MovieList
