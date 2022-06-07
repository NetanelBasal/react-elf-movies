import { useObservable } from '@ngneat/react-rxjs';
import { playlist$ } from '../movies-page/movies.repository';

export function PlaylistPage() {
  const [playlist] = useObservable(playlist$);

  return (
    <div>
      <h1>Welcome to PlaylistPage!</h1>

      {playlist.map((movie) => {
        return (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlaylistPage;
