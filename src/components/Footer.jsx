import { Link } from 'react-router-dom';

import '../styles/footer.css';

export const Footer = () => {
	return (
		<footer>
			<div className='footer-text'>
				<p>Desarrollado con</p>
				<img src='src/resources/pokeapi-logo.svg' alt='PokeAPI logo' />
				<p>y</p>
				<img className='react-logo' src='src/resources/react-logo.png' alt='ReactJS logo' />
			</div>
			<a className='github-link' href='https://github.com/dgr92/PokeSearch' target='_blank' rel='noreferrer'>
				<img src='src/resources/icons/github-icon.svg' alt='Enlace a GitHub' />
			</a>
			<Link to='/changelog'>v1.0</Link>
		</footer>
	);
};
