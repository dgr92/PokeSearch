import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProviderComponent = ({ children }) => {
	const [pokemonActualGen, setPokemonActualGen] = useState([]);
	const [numOfGenerations, setNumOfGenerations] = useState([]);


	return (
		<PokemonContext.Provider value={{pokemonActualGen, setPokemonActualGen, numOfGenerations, setNumOfGenerations}}>
			{children}
		</PokemonContext.Provider>
	);
};
