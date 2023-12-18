import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PokeApp } from './components/PokeApp';
import { Footer } from './components/Footer';

import './App.css';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/app' element={<PokeApp />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
