import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer>
			<div>
				<p>Desarrollado con</p>
				<img src='src/resources/pokeapi-logo.svg' alt="PokeAPI logo"/>
			</div>
			<Link to='/changelog'>v1.0</Link>
		</footer>
	);
};
