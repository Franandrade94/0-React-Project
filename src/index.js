import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <script src="https://www.google.com/recaptcha/api.js?render=6LdWAt8mAAAAABTWMUOovfPKHkpXdP-OIlc7oSpj"></script>
  </React.StrictMode>
);

reportWebVitals();
