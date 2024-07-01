import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import reset from './styles/reset';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Global styles={reset} />
      <App />
    </React.StrictMode>
  );
}
