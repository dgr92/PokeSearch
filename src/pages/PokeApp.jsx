import { useState, useContext } from 'react';

import { PokemonContext } from '../context/PokemonContext';
import { GenList } from '../components/GenList';
import { Header } from '../components/Header';
import { PokemonList } from '../components/PokemonList';

export const PokeApp = () => {
	const [hideGens, setHideGens] = useState(true);
	const { numOfGenerations, setNumOfGenerations } = useContext(PokemonContext);

	// Cerrar desplegable de generaciones
	const closeGenMenu = () => {
		setHideGens(true);
		setNumOfGenerations([]);
	};

	return (
		<div>
			<Header setHideGens={setHideGens} />
			<GenList numOfGenerations={numOfGenerations} hidden={hideGens} setHideGens={setHideGens} />
			{numOfGenerations.length ? <button className='close-button' onClick={closeGenMenu}></button> : null}
			<main>
				<PokemonList />
			</main>
		</div>
	);
};
