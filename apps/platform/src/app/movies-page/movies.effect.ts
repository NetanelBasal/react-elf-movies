import { actionsFactory, createEffect, ofType } from '@ngneat/effects';
import { switchMap, tap } from 'rxjs';
import { http } from '../http';
import { Movie, setMovies } from './movies.repository';

export const moviesActions = actionsFactory('movies');

export const loadMovies = moviesActions.create('Load Movies');

export const loadMovies$ = createEffect((actions) =>
  actions.pipe(
    ofType(loadMovies),
    switchMap(() =>
      http<{ movies: Movie[] }>(
        'https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',
        {
          selector: (res) => res.json(),
        }
      )
    ),
    tap(({ movies }) => setMovies(movies))
  )
);
