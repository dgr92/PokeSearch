import { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

// Boton de cada una de las generaciones
export const GenButton = ({ gen, genNum, setHideGens }) => {
	const [error, setError] = useState('');
	const { setPokemonActualGen, setNumOfGenerations, setSearchResults } = useContext(PokemonContext);

	// Fetch que trae todos los pokémon de esa generación
	const handleSearchGenInfo = async () => {
		setPokemonActualGen([]);
		setSearchResults([])
		setHideGens(true)
		try {
			const genData = await fetch(gen.url)
				.then((response) => response.json())
				.then((data) => {
					return data;
				});
			let actualPokemons = genData.pokemon_species;
			setPokemonActualGen(actualPokemons);

			setNumOfGenerations([]);
		} catch (e) {
			setError(e.message);
			console.error(error);
		}
	};

	return (
		<div className='gen-button'>
			<button onClick={handleSearchGenInfo}>{`${genNum}ª Gen`}</button>
		</div>
	);
};
