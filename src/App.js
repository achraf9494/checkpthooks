
import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import SearchMovies from './Components/SearchMovies';
import { moviesData } from './data';
import AddMovies from './Components/AddMovies'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState('');
  const [searchRating, setSearchRating] = useState(1);
  const handleAdd =(form) => setMovies([...movies,form])
  // handle rating
  const handleRating = (newRate) => setSearchRating(newRate);
  return (
    <div className='App' >
      <div className="Nav">
        <SearchMovies search={search} setSearch={setSearch}  handleRating={handleRating}
        searchRating={searchRating} /></div>
     <div className='container-fluid movie-app' >
     <MovieList film={movies.filter
     (el => 
      el.name
      .toLowerCase()
      .includes(search.toLowerCase().trim())  &&
            movies.rating >= searchRating
     )} />
      
     </div>
     < AddMovies handleAdd={handleAdd} /> 

    </div>
  );
}

export default App;
