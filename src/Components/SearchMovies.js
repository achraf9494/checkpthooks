import React from 'react'
import Rating from '../Rating'

const SearchMovies = (  { searchRating, handleRating ,search, setSearch }) => {
    
    return (
        <div >
            <h3> Movie App</h3>
            <form className="search" >
                <input 
                type="text"
                value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder=' search...'/>
                <Rating rate={searchRating} handleRating={handleRating}/>
            </form>
        </div>
    )
}

export default SearchMovies
