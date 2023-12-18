import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { PokemonContext } from '../context/PokemonContext';
import { GenList } from './GenList';
import { PokemonList } from './PokemonList';

export const PokeApp = () => {
	const [error, setError] = useState('');
	const { pokemonActualGen, setPokemonActualGen, numOfGenerations, setNumOfGenerations} = useContext(PokemonContext);

	// Fetch a la API al pulsar el botón que despliega el listado de generaciones pokémont
	const handleGens = async () => {
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

	// Cerrar desplegable de generaciones
	const closeGenMenu = () => {
		setNumOfGenerations([]);
	};

	// Eliminamos los pokemon del contexto si volvemos a la pagina principal
	const handleHomeButton = () => {
		setPokemonActualGen([]);
		setNumOfGenerations([]);
	}

	return (
		<div>
			<header>
				<button className='home-button'>
					<Link to='/' onClick={handleHomeButton} >Home</Link>
				</button>

				<button onClick={handleGens}>Search for Gen</button>

				<GenList numOfGenerations={numOfGenerations} />
				{numOfGenerations.length ? (
					<button onClick={closeGenMenu}>X</button> //TODO: PONER TRANSPARENTE, GIGANTE Y POR DEBAJO
				) : null}
			</header>

			<hr />

			<main>
				<PokemonList genInfo={pokemonActualGen} />
			</main>
		</div>
	);
};
