import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const HomePage = () => {
	return (
		<>
			<div className='home-page'>
				<h1>Bienvenidx a PokeSearch</h1>
				<button className='main-button'>
					<Link to='/app'>Entrar</Link>
				</button>
			</div>
			<Footer />
		</>
	);
};
