import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    fetch('https://swapi.dev/api/film/').then(
      response => {

        return response.json();
      }
    ).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies);
    })
    .catch( err => {
      console.log(err)
      setError(err);
    });
    setIsLoading(false);
  }

  async function fetchMoviesHandlerByAsync() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      
      if(!response.ok) {
        throw new Error('Something went wront!')
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
        {isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
