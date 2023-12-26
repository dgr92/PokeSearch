// A partir de la url del pokémon, obtener los datos
export const getPokemonInfo = async (pokemon) => {
    try {
        const infoPokemon = await fetch(pokemon.url)
            .then((response) => response.json())
            .then((infoPokemon) => {
                return infoPokemon;
            });

        const spriteAndTypeData = await fetch(infoPokemon.varieties[0].pokemon.url)
            .then((response) => response.json())
            .then((spriteAndType) => {
                return spriteAndType;
            });

        const evolutionData = await fetch(infoPokemon.evolution_chain.url)
            .then((response) => response.json())
            .then((evolution) => {
                return evolution;
            })

        const nameAndNumber = getNameAndNumber(infoPokemon);
        const sprites = getSprites(spriteAndTypeData);
        const types = getTypes(spriteAndTypeData);
        const pokedexDescription = getPokemonDescription(infoPokemon);
        const pokemonDescription = getPokedexDescription(infoPokemon);
        const preEvolution = getPreEvolution(infoPokemon);
        const evolution = getEvolution(evolutionData);
        const category = getCategory(infoPokemon);

        const pokemonData = {
            pokemon: nameAndNumber,
            sprites: sprites,
            types: types,
            description: pokemonDescription,
            pokedex_description: pokedexDescription,
            pre_evolution: preEvolution,
            evolution: evolution,
            category: category,
        };

        return pokemonData;

    } catch (e) {
        console.log(e.message);
    }
};

// Get name and number
const getNameAndNumber = (infoPokemon) => {
    return {
        name: infoPokemon.name,
        number: infoPokemon.id,
    }
}

// Get sprites
const getSprites = (spriteAndTypeData) => {
    const normalSprite = spriteAndTypeData.sprites.other["official-artwork"].front_default;
    const shinySprite = spriteAndTypeData.sprites.other["official-artwork"].front_shiny;

    return {
        normalSprite: normalSprite,
        shinySprite: shinySprite
    }
}

// Get types
const getTypes = (spriteAndTypeData) => {
    const type1 = spriteAndTypeData.types[0].type.name;
    const type2 = spriteAndTypeData.types[1]?.type.name;
    return {
        type1: type1,
        type2: type2,
    }
}

// Get pokemon description
const getPokemonDescription = (infoPokemon) => {
    for (let i = 0; i < infoPokemon.genera.length; i++) {
        const language = infoPokemon.genera[i].language.name === 'es';

        if (language) {
            return infoPokemon.genera[i].genus
        }
    }
}

// Get pokedex description
const getPokedexDescription = (infoPokemon) => {
    for (let i = 0; i < infoPokemon.flavor_text_entries.length; i++) {
        const language = infoPokemon.flavor_text_entries[i].language.name === 'es';
        const game = infoPokemon.flavor_text_entries[i].version.name === 'x';

        if (language && game) {
            return infoPokemon.flavor_text_entries[i].flavor_text;
        }
    }
}

// Get pre-evolution:
const getPreEvolution = (infoPokemon) => {
    if (infoPokemon.evolves_from_species) {
        return infoPokemon.evolves_from_species.name;
    } else {
        return null;
    }
}

// Get Evolution
const getEvolution = (evolutionData) => {
    return evolutionData.chain.evolves_to[0]?.evolves_to[0]?.species.name;
}

// Get legendary or mythical
const getCategory = (infoPokemon) => {
    return {
        isLegendary: infoPokemon.is_legendary,
        isMythical: infoPokemon.is_mythical,
    }
} 