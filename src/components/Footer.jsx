import { Link } from 'react-router-dom';

import '../styles/footer.css';

export const Footer = () => {
	return (
		<footer>
			<div>
				<p>Desarrollado con</p>
				<img src='src/resources/pokeapi-logo.svg' alt='PokeAPI logo' />
			</div>
			<a className='github-link' href='https://github.com/dgr92/PokeSearch' target='_blank' rel='noreferrer'>
				<img src='src/resources/icons/github-icon.svg' alt='Enlace a GitHub' />
			</a>
			<Link to='/changelog'>v1.0</Link>
		</footer>
	);
};
