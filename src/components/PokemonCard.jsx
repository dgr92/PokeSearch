import { useState, useEffect, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

import '../styles/pokemonCard.css';

// Each individual pokemon from the list
export const PokemonCard = ({ pokemonData }) => {
	const [flipped, setFlipped] = useState(false);
	const [pokemonImage, setPokemonImage] = useState(
		<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />
	);
	const { flipAllCards, colorPatternAll } = useContext(PokemonContext);

	// Flip all cards at once
	useEffect(() => {
		if (flipAllCards) {
			setFlipped(true);
		} else {
			setFlipped(false);
		}
	}, [flipAllCards]);

	// Change all colors at once
	useEffect(() => {
		if (colorPatternAll === 'normalSprite') {
			setPokemonImage(<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />);
		}
		if (colorPatternAll === 'shinySprite') {
			setPokemonImage(<img src={pokemonData.sprites.shinySprite} alt={`Imagen de ${pokemonData.pokemon.name} shiny.`} />);
		}
	}, [colorPatternAll]);

	const handleHover = (imageStyle) => {
		if (imageStyle === 'normalSprite') {
			setPokemonImage(<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />);
		}
		if (imageStyle === 'shinySprite') {
			setPokemonImage(<img src={pokemonData.sprites.shinySprite} alt={`Imagen de ${pokemonData.pokemon.name} shiny.`} />);
		}
	};

	const handleFlip = () => {
		setFlipped(!flipped);
	};

	const backgroundTypeImage = `../resources/images-background-types/${pokemonData.types.type1}-bg.jpg`;

	const backgroundFrontCard = {
		background: `no-repeat url(${backgroundTypeImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '70%',
		borderRadius: '20px 20px 0 0',
	};

	const backgroundBackCard = {
		background: `no-repeat url(${backgroundTypeImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '50%',
		borderRadius: '20px 20px 0 0',
	};

	return (
		<div className={`pokemon-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
			{/* Front Card */}
			<div className='card-face front'>
				<div className='background' style={backgroundFrontCard}>
					<h2 className='pokemon-number'>#{pokemonData.pokemon.number}</h2>

					<div className='pokemon-sprite'>{pokemonImage}</div>

					<h2 className='pokemon-name'>{pokemonData.pokemon.name.charAt(0).toUpperCase() + pokemonData.pokemon.name.slice(1)}</h2>

					<div className='types'>
						<img src={`/resources/images-pokemon-types/${pokemonData.types.type1}.png`} alt='Tipo principal' />
						{pokemonData.types.type2 ? (
							<img src={`/resources/images-pokemon-types/${pokemonData.types.type2}.png`} alt='Tipo secundario' />
						) : null}
					</div>

					<div className='sprite-buttons'>
						<button onMouseOver={() => handleHover('normalSprite')}>Normal</button>
						<button onMouseOver={() => handleHover('shinySprite')}>Shiny</button>
					</div>
				</div>

				<div className='pokemon-description'>
					<h3>{pokemonData.pokedex_description}</h3>
					<p>{pokemonData.description}</p>
				</div>
			</div>

			{/* Back Card */}
			<div className='card-face back'>
				<div className='background' style={backgroundBackCard}>
					<h2 className='pokemon-number'>#{pokemonData.pokemon.number}</h2>

					<div className='pokemon-sprite'>{pokemonImage}</div>
				</div>

				<h2 className='pokemon-name'>{pokemonData.pokemon.name.charAt(0).toUpperCase() + pokemonData.pokemon.name.slice(1)}</h2>

				<div className={`category ${flipped ? '' : 'hidden'}`}>
					{pokemonData.category.isLegendary ? <img src='/resources/images-category/legendary.png' alt='Img Legendario' /> : null}
					{pokemonData.category.isMythical ? <img src='/resources/images-category/mythical.png' alt='Img Mítico' /> : null}
				</div>

				<div className='evo-and-stats'>
					<div className='evolutions'>
						{pokemonData.pre_evolution ? (
							<div>
								<h4>Pre-evo.:</h4>
								<h4>{pokemonData.pre_evolution.charAt(0).toUpperCase() + pokemonData.pre_evolution.slice(1)}</h4>
							</div>
						) : (
							<div>
								<h4>Pre-evo.:</h4>
								<h4>No</h4>
							</div>
						)}

						{pokemonData.evolution?.ev1 ? (
							<div>
								<h4>Evolución:</h4>
								<h4>{pokemonData.evolution?.ev1.charAt(0).toUpperCase() + pokemonData.evolution?.ev1.slice(1)}</h4>
							</div>
						) : (
							<div>
								<h4>Evolución:</h4>
								<h4>No</h4>
							</div>
						)}

						{pokemonData.evolution?.ev2 ? (
							<div>
								<h4>Evolución:</h4>
								<h4>{pokemonData.evolution?.ev2.charAt(0).toUpperCase() + pokemonData.evolution?.ev2.slice(1)}</h4>
							</div>
						) : null}
					</div>

					<dl className='stats'>
						<div className='stat'>
							<dt>Hp:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.hp / 255) * 100}%` }}>
									<strong>{pokemonData.stats.hp}</strong>
								</div>
							</dd>
						</div>
						<div className='stat'>
							<dt>At:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.at / 255) * 100}%` }}>
									<strong>{pokemonData.stats.at}</strong>
								</div>
							</dd>
						</div>
						<div className='stat'>
							<dt>Def:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.def / 255) * 100}%` }}>
									<strong>{pokemonData.stats.def}</strong>
								</div>
							</dd>
						</div>
						<div className='stat'>
							<dt>At Esp:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.atEsp / 255) * 100}%` }}>
									<strong>{pokemonData.stats.atEsp}</strong>
								</div>
							</dd>
						</div>
						<div className='stat'>
							<dt>Def Esp:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.defEsp / 255) * 100}%` }}>
									<strong>{pokemonData.stats.defEsp}</strong>
								</div>
							</dd>
						</div>
						<div className='stat'>
							<dt>Vel:</dt>
							<dd>
								<div className='bar' style={{ width: `${(pokemonData.stats.vel / 255) * 100}%` }}>
									<strong>{pokemonData.stats.vel}</strong>
								</div>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
};
