// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PokemonProviderComponent } from './context/PokemonContext.jsx';
import App from './App.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProviderComponent>
        <App />
      </PokemonProviderComponent>
    </BrowserRouter>
  </React.StrictMode>
);
