import { PokemonCard } from './PokemonCard';

// Listado de todos los pokémon de una generación 
export const PokemonList = ({ genInfo }) => {
    genInfo.sort((a, b) => {
        const numA = parseInt(a.url.split('/').filter(Boolean).pop(), 10);
        const numB = parseInt(b.url.split('/').filter(Boolean).pop(), 10);
        return numA - numB;
    })

	return (
		<ul className='lista-pokemon'>
			{genInfo.map((pokemon) => {
                return (
                    <li key={pokemon.name}>
						<PokemonCard pokemon={pokemon} />
					</li>
				);
			})}
		</ul>
	);
};

