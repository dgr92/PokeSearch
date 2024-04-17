import { useContext } from 'react';

import { PokemonContext } from '../context/PokemonContext';

export const SearchForm = () => {
  const { pokemonDataList, setSearchResults } = useContext(PokemonContext);

  const handleSearchPokemon = (e) => {
    const searchFor = e.target.value;
    if (pokemonDataList.length) {
      const results = pokemonDataList.filter(
        (pokemonData) =>
          pokemonData.pokemon.name.toLowerCase().indexOf(searchFor.toLowerCase()) > -1
      );
      setSearchResults(results);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`search-bar`} onChange={handleSearchPokemon} onSubmit={handleSubmit}>
      <input type="search" name="pokemonSearch" placeholder="Buscar Pokémon..." />
    </form>
  );
};
