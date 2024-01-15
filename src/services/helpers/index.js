// A partir de la url del pokémon, obtener los datos
export const getPokemonInfo = async (pokemon) => {
    try {
        const infoPokemon = await fetch(pokemon.url)
            .then((response) => response.json())
            .then((infoPokemon) => {
                return infoPokemon;
            });

        const spriteTypeStatsData = await fetch(infoPokemon.varieties[0].pokemon.url)
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
        const sprites = getSprites(spriteTypeStatsData);
        const types = getTypes(spriteTypeStatsData);
        const pokedexDescription = getPokemonDescription(infoPokemon);
        const pokemonDescription = getPokedexDescription(infoPokemon);
        const pokemonStats = getPokemonStats(spriteTypeStatsData)
        const evolution = getEvolution(evolutionData, infoPokemon);
        const preEvolution = getPreEvolution(infoPokemon);
        const category = getCategory(infoPokemon);
        const pokemonData = {
            pokemon: nameAndNumber,
            sprites: sprites,
            types: types,
            description: pokemonDescription,
            pokedex_description: pokedexDescription,
            stats: pokemonStats,
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
const getSprites = (spriteTypeStatsData) => {
    const normalSprite = spriteTypeStatsData.sprites.other["official-artwork"].front_default;
    const shinySprite = spriteTypeStatsData.sprites.other["official-artwork"].front_shiny;

    return {
        normalSprite: normalSprite,
        shinySprite: shinySprite
    }
}

// Get types
const getTypes = (spriteTypeStatsData) => {
    const type1 = spriteTypeStatsData.types[0].type.name;
    const type2 = spriteTypeStatsData.types[1]?.type.name;
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

// Get pokemon stats
const getPokemonStats = (spriteTypeStatsData) => {
    const pokemonStats = {
        hp: spriteTypeStatsData.stats[0].base_stat,
        at: spriteTypeStatsData.stats[1].base_stat,
        def: spriteTypeStatsData.stats[2].base_stat,
        atEsp: spriteTypeStatsData.stats[3].base_stat,
        defEsp: spriteTypeStatsData.stats[4].base_stat,
        vel: spriteTypeStatsData.stats[5].base_stat,
    }
    return pokemonStats;
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
const getEvolution = (evolutionData, infoPokemon) => {
    if (evolutionData.chain.species.name === infoPokemon.name) {
        return evolutionData.chain.evolves_to[0]?.species.name;
    }
    if (evolutionData.chain.evolves_to[0]?.species.name === infoPokemon.name) {
        return evolutionData.chain.evolves_to[0]?.evolves_to[0]?.species.name;
    }

}

// Get legendary or mythical
const getCategory = (infoPokemon) => {
    return {
        isLegendary: infoPokemon.is_legendary,
        isMythical: infoPokemon.is_mythical,
    }
} 