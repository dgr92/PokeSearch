// Cada pokémon individual del listado
export const PokemonCard = ({ pokemonData }) => {
	// console.log(pokemonData);

	const handlePokemonImage = () => {
		
	};

	return (
		<li className='pokemon-card'>
			<div className='pokemon'>
				<h2>#{pokemonData.pokemon.number}</h2>
				<h2> {pokemonData.pokemon.name.toUpperCase()}</h2>
			</div>

			<div className="pokemon-sprites">
				<img
					className='sprite-normal'
					src={pokemonData.sprites.normalSprite}
					alt={pokemonData.pokemon.name}
				/>
				<img
					className='sprite-shiny hidden'
					src={pokemonData.sprites.shinySprite}
					alt={pokemonData.pokemon.name}
				/>
			</div>

			<div>
				<button onClick={handlePokemonImage()}>Normal</button>
				<button onClick={handlePokemonImage()}>Shiny</button>
			</div>

			<div className='types'>
				<img
					src={`src/resources/images-pokemon-types/${pokemonData.types.type1}.png`}
					alt='Tipo principal'
				/>
				{pokemonData.types.type2 ? (
					<img
						src={`src/resources/images-pokemon-types/${pokemonData.types.type2}.png`}
						alt='Tipo secundario'
					/>
				) : null}
			</div>

			<div>
				<h3>{pokemonData.pokedex_description}</h3>
				<h3>{pokemonData.description}</h3>
			</div>
			<div className='evolutions'>
				<h3>{pokemonData.pre_evolution}</h3>
				<h3>{pokemonData.evolution}</h3>
			</div>

			{/* TODO: CATEGORÍAS */}
		</li>
	);
};
