import React from 'react'
import {Link} from 'react-router-dom'

function info  ({movies ,match })  {
    let movie = movies.find(el  => el.name === match.params.name)
    return (
        <div>
            <div>
            {''}
            <h1> {movie.name}  </h1>
            <h1> {movie.desc}  </h1> {''}
            </div>    
            <button> {''}
                <Link to="/">Return Home</Link>{''}
            </button>
        </div>
    )
}

export default info
