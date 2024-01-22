import { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

import '../styles/genButton.css';

// Boton de cada una de las generaciones
export const GenButton = ({ gen, genNum, setHideGens }) => {
	const [error, setError] = useState('');
	const {
		setInitialBriefing,
		setLoadingPkmn,
		setPokemonActualGen,
		setNumOfGenerations,
		setSearchResults,
		setFlipAllCards,
		setColorPatternAll,
	} = useContext(PokemonContext);

	// Fetch que trae todos los pokémon de esa generación
	const handleSearchGenInfo = async () => {
		setInitialBriefing(false);
		setLoadingPkmn(true);
		setPokemonActualGen([]);
		setSearchResults([]);
		setHideGens(true);
		setFlipAllCards(false);
		setColorPatternAll('normalSprite');
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
			<button onClick={handleSearchGenInfo}>{`${genNum}ª Generación`}</button>
		</div>
	);
};
