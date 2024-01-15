import { useContext } from 'react';

import { PokemonContext } from '../context/PokemonContext';

export const SearchForm = () => {
	const { pokemonDataList, searchResults, setSearchResults } = useContext(PokemonContext);

	const handleSearchPokemon = (e) => {
		const searchFor = e.target.value;
		const results = pokemonDataList.filter((pokemonData) => pokemonData.pokemon.name.toLowerCase().indexOf(searchFor.toLowerCase()) > -1);
        setSearchResults(results);
    };

	return (
		<form className={`search-bar`} onChange={handleSearchPokemon}>
			<input type='search' name='pokemonSearch' placeholder='Buscar Pokémon...' />
		</form>
	);
};
