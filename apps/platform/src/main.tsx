import { actionsDispatcher, initEffects } from '@ngneat/effects';
import { devTools } from '@ngneat/elf-devtools';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

devTools({
  actionsDispatcher
});

initEffects();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
