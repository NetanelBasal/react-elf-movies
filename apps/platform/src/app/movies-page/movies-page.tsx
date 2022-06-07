import { dispatch, registerEffects } from '@ngneat/effects';
import { useObservable } from '@ngneat/react-rxjs';
import { useEffect } from 'react';
import { loadMovies, loadMovies$ } from './movies.effect';
import { addToPlaylist, movies$ } from './movies.repository';

export function MoviesPage() {
  registerEffects(loadMovies$);

  const [movies] = useObservable(movies$);

  useEffect(() => dispatch(loadMovies()), []);

  return (
    <div>
      <h1>Welcome to MoviesPage!</h1>

      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <button onClick={() => addToPlaylist(movie.id)}>
              Add to playlist
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MoviesPage;
