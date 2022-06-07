import './app.scss';

import { Route, Routes, Link, Navigate } from 'react-router-dom';
import MoviesPage from './movies-page/movies-page';
import PlaylistPage from './playlist-page/playlist-page';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="movies" element={<MoviesPage />} />

        <Route path="playlist" element={<PlaylistPage />} />

        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </>
  );
}

export default App;
