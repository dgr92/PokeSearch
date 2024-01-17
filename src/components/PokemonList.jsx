import { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { getPokemonInfo } from '../services/helpers';

import { PokemonCard } from './PokemonCard';

import '../styles/pokemonList.css';

// Listado de todos los pokémon de una generación
export const PokemonList = () => {
	const { pokemonActualGen, pokemonDataList, setPokemonDataList, searchResults } = useContext(PokemonContext);

	useEffect(() => {
		const fetchPokemonData = async () => {
			const updatedPokemonDataList = await Promise.all(
				pokemonActualGen.map(async (pokemon) => {
					const pokemonData = await getPokemonInfo(pokemon);
					return pokemonData;
				})
			);
			setPokemonDataList(updatedPokemonDataList);
		};
		fetchPokemonData();
	}, [pokemonActualGen]);

	pokemonDataList.sort((a, b) => {
		const numA = a.pokemon.number;
		const numB = b.pokemon.number;
		return numA - numB;
	});

	return (
		<ul className='pokemon-list'>
			{searchResults.length
				? searchResults.map((pokemonData) => {
						return (
							<li key={pokemonData.pokemon.name}>
								<PokemonCard pokemonData={pokemonData} />
							</li>
						);
				  })
				: pokemonDataList.map((pokemonData) => {
						return (
							<li key={pokemonData.pokemon?.name}>
								<PokemonCard pokemonData={pokemonData} />
							</li>
						);
				  })}
		</ul>
	);
};
