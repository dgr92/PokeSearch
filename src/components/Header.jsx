import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { PokemonContext } from '../context/PokemonContext';
import { SearchForm } from './SearchForm';

export const Header = ({ setHideGens }) => {
	const [error, setError] = useState('');
	const { setPokemonActualGen, setNumOfGenerations, setsearchResults } = useContext(PokemonContext);

	// Fetch a la API al pulsar el botón que despliega el listado de generaciones pokémont
	const handleGens = async () => {
		setHideGens(false);
		try {
			const numOfGens = await fetch('https://pokeapi.co/api/v2/generation/')
				.then((responseGens) => responseGens.json())
				.then((dataGens) => {
					return dataGens.results;
				});
			setNumOfGenerations(numOfGens);
		} catch (e) {
			setError(e.message);
			console.error(error);
		}
	};

	// Eliminamos los pokemon del contexto si volvemos a la pagina principal
	const handleHomeButton = () => {
		setPokemonActualGen([]);
		setNumOfGenerations([]);
		setsearchResults([])
	};

	return (
		<header>
			<div>
				<div className='header-buttons'>
					<button className='home-button'>
						<Link to='/' onClick={handleHomeButton}>
							Inicio
						</Link>
					</button>
					<button onClick={handleGens}>Buscar Generación</button>
				</div>
				{<SearchForm />}
			</div>
		</header>
	);
};
