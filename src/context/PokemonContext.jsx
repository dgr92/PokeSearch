import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProviderComponent = ({ children }) => {
	const [initialBriefing, setInitialBriefing] = useState(true);
	const [numOfGenerations, setNumOfGenerations] = useState([]);
	const [pokemonActualGen, setPokemonActualGen] = useState([]);
	const [pokemonDataList, setPokemonDataList] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [loadingPkmn, setLoadingPkmn] = useState(false);
	const [flipAllCards, setFlipAllCards] = useState(false);
	const [colorPatternAll, setColorPatternAll] = useState('normalSprite');

	return (
		<PokemonContext.Provider
			value={{
				initialBriefing,
				setInitialBriefing,
				numOfGenerations,
				setNumOfGenerations,
				pokemonActualGen,
				setPokemonActualGen,
				pokemonDataList,
				setPokemonDataList,
				searchResults,
				setSearchResults,
				loadingPkmn,
				setLoadingPkmn,
				flipAllCards,
				setFlipAllCards,
				colorPatternAll,
				setColorPatternAll,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
