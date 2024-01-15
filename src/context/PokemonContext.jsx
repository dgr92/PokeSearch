import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProviderComponent = ({ children }) => {
	const [numOfGenerations, setNumOfGenerations] = useState([]);
	const [pokemonActualGen, setPokemonActualGen] = useState([]);
	const [pokemonDataList, setPokemonDataList] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	return (
		<PokemonContext.Provider
			value={{
				numOfGenerations,
				setNumOfGenerations,
				pokemonActualGen,
				setPokemonActualGen,
				pokemonDataList,
				setPokemonDataList,
				searchResults,
				setSearchResults,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
