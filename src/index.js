import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { faUser, faSearch, faKey, faSignOutAlt, faFolder, faStar, faChartLine, faCalendar, faClock, faArrowRight, faArrowLeft, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './index.css';


library.add(faUser, faSearch, faKey, faSignOutAlt, faFolder, faStar, faChartLine, faCalendar, faClock, faArrowRight, faArrowLeft, faBars, faXmark);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
