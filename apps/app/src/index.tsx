import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is currently a workaround to import styles from libraries
import '@my-libs/components/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
