import { useState } from 'react';

// Cada pokémon individual del listado
import { getPkmnInfo } from '../services';

export const PokemonCard = ({ pokemon }) => {
	// const [pkmnInfo, setPkmnInfo] = useState({});
	const pkmnInfo = getPkmnInfo(pokemon);

    //TODO: GENERAR UN ARRAY CON TODOS LOS DATOS DE LOS FETCH DE TODOS LOS POKEMON Y GUARDARLO EN EL CONTEXTO SUSTITUYENDO AL POKEMONACTUALGEN

	return (
		<li className='pkmn'>
			<h2> {pkmnInfo.name}</h2>
			{/* <img src={} /> */}
		</li>
	);
};
