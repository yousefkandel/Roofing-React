import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// src/index.js أو src/App.js
import '../src/assets/css/plugins/bootstrap.min.css';
import '../src/assets/css/plugins/aos.css';
import '../src/assets/css/plugins/fontawesome.css';
import '../src/assets/css/plugins/magnific-popup.css';
import '../src/assets/css/plugins/owlcarousel.min.css';
import '../src/assets/css/plugins/sidebar.css';
import '../src/assets/css/plugins/slick-slider.css';
import '../src/assets/css/plugins/nice-select.css';
import '../src/assets/css/plugins/nice-select.css';
import '../src/assets/css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
