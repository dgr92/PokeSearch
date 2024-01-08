import { useState } from 'react';
import '../styles/pokemonCard.css';

// Cada pokémon individual del listado
export const PokemonCard = ({ pokemonData }) => {
	const [flipped, setFlipped] = useState(false);
	const [pokemonImage, setPokemonImage] = useState(
		<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />
	);

	const handleHover = (imageStyle) => {
		if (imageStyle === 'normalSprite') {
			setPokemonImage(<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />);
		}
		if (imageStyle === 'shinySprite') {
			setPokemonImage(<img src={pokemonData.sprites.shinySprite} alt={`Imagen de ${pokemonData.pokemon.name} shiny.`} />);

			setTimeout(() => {
				setPokemonImage(<img src={pokemonData.sprites.normalSprite} alt={`Imagen de ${pokemonData.pokemon.name}.`} />);
			}, 10000);
		}
	};

	const handleFlip = () => {
		setFlipped((flipped) => !flipped);
	};

	console.log(pokemonData); 																	//TODO: borrar
	return (
		<li className='pokemon-card'>
			<div className='front-card' id={flipped === true ? 'hidden' : ''} onClick={handleFlip}>
				<div className='pokemon'>
					<h2>#{pokemonData.pokemon.number}</h2>
					<h2>{pokemonData.pokemon.name.charAt(0).toUpperCase() + pokemonData.pokemon.name.slice(1)}</h2>
				</div>

				<div className='pokemon-sprite'>{pokemonImage}</div>

				<div className='types'>
					<img src={`src/resources/images-pokemon-types/${pokemonData.types.type1}.png`} alt='Tipo principal' />
					{pokemonData.types.type2 ? (
						<img src={`src/resources/images-pokemon-types/${pokemonData.types.type2}.png`} alt='Tipo secundario' />
					) : null}
				</div>

				<div className='sprite-buttons'>
					<button onMouseOver={() => handleHover('normalSprite')}>Normal</button>
					<button onMouseOver={() => handleHover('shinySprite')}>Shiny</button>
				</div>

				<div>
					<h3>{pokemonData.pokedex_description}</h3>
					<h3>{pokemonData.description}</h3>
				</div>
			</div>

			<div className='back-card' id={flipped === true ? '' : 'hidden'} onClick={handleFlip}>
				<div className='pokemon'>
					<h2>#{pokemonData.pokemon.number}</h2>
					<h2>{pokemonData.pokemon.name.charAt(0).toUpperCase() + pokemonData.pokemon.name.slice(1)}</h2>{' '}
				</div>

				<div className='evolutions'>
					{pokemonData.pre_evolution ? (
						<h3>Pre Evolución: {pokemonData.pre_evolution.charAt(0).toUpperCase() + pokemonData.pre_evolution.slice(1)}</h3>
					) : null}
					{pokemonData.evolution ? (
						<h3>Evolución: {pokemonData.evolution.charAt(0).toUpperCase() + pokemonData.evolution.slice(1)}</h3>
					) : null}
				</div>

				<dl className='stats'>
					<div>
						<dt>Hp:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.hp / 255) * 100}%` }}>
								<strong>{pokemonData.stats.hp}</strong>
							</div>
						</dd>
					</div>
					<div>
						<dt>At:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.at / 255) * 100}%` }}>
								<strong>{pokemonData.stats.at}</strong>
							</div>
						</dd>
					</div>
					<div>
						<dt>Def:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.def / 255) * 100}%` }}>
								<strong>{pokemonData.stats.def}</strong>
							</div>
						</dd>
					</div>
					<div>
						<dt>At Esp:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.atEsp / 255) * 100}%` }}>
								<strong>{pokemonData.stats.atEsp}</strong>
							</div>
						</dd>
					</div>
					<div>
						<dt>Def Esp:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.defEsp / 255) * 100}%` }}>
								<strong>{pokemonData.stats.defEsp}</strong>
							</div>
						</dd>
					</div>
					<div>
						<dt>Vel:</dt>
						<dd>
							<div style={{ width: `${(pokemonData.stats.vel / 255) * 100}%` }}>
								<strong>{pokemonData.stats.vel}</strong>
							</div>
						</dd>
					</div>
				</dl>
			</div>
		</li>
	);
};
