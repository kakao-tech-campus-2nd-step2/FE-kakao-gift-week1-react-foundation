import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { Button } from '@/styles/Button';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Button>버튼</Button>
  </React.StrictMode>,
);
