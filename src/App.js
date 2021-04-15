
import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import SearchMovies from './Components/SearchMovies';
import { moviesData } from './data';
import AddMovies from './Components/AddMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom' ; 
import Info from './Components/Info';



function App() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState('');
  const [searchRating, setSearchRating] = useState(1);
  const handleAdd =(form) => setMovies([...movies,form])
  // handle rating
  const handleRating = (newRate) => setSearchRating(newRate);
  return (
    <div className='App' >
    <Router>
    
      <div className="Nav">
        <SearchMovies search={search} setSearch={setSearch}  handleRating={handleRating}
        searchRating={searchRating} />
        </div>
         <Switch>
           <Route exact path="/" render={() =>(<div className='container-fluid movie-app' >
      
      <MovieList film={movies.filter
      (el => 
       el.name
       .toLowerCase()
       .includes(search.toLowerCase().trim()) && el.rating >= searchRating
      )} />
      </div>)}/>
      <Route path='/infos/:name' render={(props) => <Info movies={movies} {...props} /> }/>

           
     
     </Switch>
     </Router>
     < AddMovies handleAdd={handleAdd} /> 

    </div>
    
  );
}

export default App;
