import { createStore, select, setProp, withProps } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  setEntities,
  selectEntities,
} from '@ngneat/elf-entities';
import { map } from 'rxjs';

interface MoviesState {
  playlist: {
    [movieId: Movie['id']]: boolean;
  };
}

export interface Movie {
  id: number;
  genres: string[];
  title: string;
  year: number;
}

export const store = createStore(
  { name: 'movies' },
  withEntities<Movie>(),
  withProps<MoviesState>({ playlist: {} })
);

export const movies$ = store.pipe(selectAllEntities());
export const playlist$ = store
  .combine({
    movies: store.pipe(selectEntities()),
    playlist: store.pipe(select((state) => state.playlist)),
  })
  .pipe(
    map(({ movies, playlist }) => {
      return Object.keys(playlist).map((id) => movies[id as unknown as number]);
    })
  );

export function setMovies(movies: Movie[]) {
  store.update(setEntities(movies));
}

export function addToPlaylist(id: Movie['id']) {
  store.update(
    setProp('playlist', (playlist) => ({
      ...playlist,
      [id]: true,
    }))
  );
}
