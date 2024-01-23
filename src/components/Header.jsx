import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { PokemonContext } from '../context/PokemonContext';
import { SearchForm } from './SearchForm';

import '../styles/header.css';

export const Header = ({ setHideGens }) => {
	const [error, setError] = useState('');
	const {
		pokemonDataList,
		flipAllCards,
		colorPatternAll,
		setInitialBriefing,
		setPokemonDataList,
		setPokemonActualGen,
		setNumOfGenerations,
		setSearchResults,
		setFlipAllCards,
		setColorPatternAll,
	} = useContext(PokemonContext);

	// Fetch which brings all the generations
	const handleGens = async () => {
		setHideGens(false);
		try {
			const numOfGens = await fetch('https://pokeapi.co/api/v2/generation/')
				.then((responseGens) => responseGens.json())
				.then((dataGens) => {
					return dataGens.results;
				});
			setNumOfGenerations(numOfGens);
		} catch (e) {
			setError(e.message);
			console.error(error);
		}
	};

	// Flip all cards at once
	const handleFlipAll = () => {
		setFlipAllCards(!flipAllCards);
	};

	// Change color pattern
	const handleNormalPatternAll = () => {
		setColorPatternAll('normalSprite');
	};

	const handleShinyPatternAll = () => {
		setColorPatternAll('shinySprite');
	};

	// Deletes all pokemon from context if we return to home page
	const handleHomeButton = () => {
		setInitialBriefing(true);
		setPokemonDataList([]);
		setPokemonActualGen([]);
		setNumOfGenerations([]);
		setSearchResults([]);
	};

	return (
		<header>
			<>
				<div className='header-buttons'>
					<button className='home-button' title='Home'>
						<Link to='/' onClick={handleHomeButton}>
							<img src='/resources/icons/home-icon.svg' alt='botón home' />
						</Link>
					</button>
					<button className='search-generation-button' title='Buscar generación' onClick={handleGens}>
						<img src='/resources/icons/search-icon.svg' alt='botón buscar' />
						<span className='search'>Buscar Generación</span>
					</button>
				</div>
				{pokemonDataList.length ? (
					<div className='pokemon-buttons-and-search'>
						{<SearchForm />}
						<div className='pokemon-buttons'>
							<button title='Voltear todas las cartas' onClick={handleFlipAll}>
								Voltear todas
							</button>
							<div className='change-color-button'>
								{colorPatternAll === 'normalSprite' ? (
									<button className='change-color' title='Ver todos los pokémon en color shiny' onClick={handleShinyPatternAll}>
										Cambiar a shiny
									</button>
								) : (
									<button className='change-color' title='Ver todos los pokémon en color normal' onClick={handleNormalPatternAll}>
										Cambiar a normal
									</button>
								)}
							</div>
						</div>
					</div>
				) : null}
			</>
		</header>
	);
};
