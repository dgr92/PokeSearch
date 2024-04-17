import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokeApp } from './pages/PokeApp';
import { ChangeLog } from './pages/ChangeLog';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<PokeApp />} />
        <Route path="/changelog" element={<ChangeLog />} />
      </Routes>
    </div>
  );
}

export default App;
