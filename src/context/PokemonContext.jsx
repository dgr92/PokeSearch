import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProviderComponent = ({ children }) => {
	const [numOfGenerations, setNumOfGenerations] = useState([]);
	const [pokemonActualGen, setPokemonActualGen] = useState([]);
	
	return (
		<PokemonContext.Provider
			value={{
				numOfGenerations,
				setNumOfGenerations,
				pokemonActualGen,
				setPokemonActualGen,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
