import { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { getPokemonInfo } from '../services/helpers';
import { PokemonCard } from './PokemonCard';
import { LoadingPkmn } from './LoadingPkmn';

import '../styles/pokemonList.css';

// List of all pokemon from a generation
export const PokemonList = () => {
	const { pokemonActualGen, pokemonDataList, setPokemonDataList, searchResults, loadingPkmn, setLoadingPkmn } = useContext(PokemonContext);

	useEffect(() => {
		const fetchPokemonData = async () => {
			try {
				const updatedPokemonDataList = await Promise.all(
					pokemonActualGen.map(async (pokemon) => {
						const pokemonData = await getPokemonInfo(pokemon);
						return pokemonData;
					})
				);
				setPokemonDataList(updatedPokemonDataList);
			} catch (e) {
				console.error(e.message);
			} finally {
				setLoadingPkmn(false);
			}
		};

		if (pokemonActualGen.length > 0) {
			fetchPokemonData();
		}

	}, [pokemonActualGen, setPokemonDataList, setLoadingPkmn]);

	pokemonDataList.sort((a, b) => {
		const numA = a.pokemon.number;
		const numB = b.pokemon.number;
		return numA - numB;
	});

	return (
		<>
			{loadingPkmn ? (
				<LoadingPkmn />
			) : (
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
			)}
		</>
	);
};
