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
      });

    const nameAndNumber = getNameAndNumber(infoPokemon);
    const sprites = getSprites(spriteTypeStatsData);
    const types = getTypes(spriteTypeStatsData);
    const pokedexDescription = getPokemonDescription(infoPokemon);
    const pokemonDescription = getPokedexDescription(infoPokemon);
    const pokemonStats = getPokemonStats(spriteTypeStatsData);
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
    console.log(e);
  }
};

// Get name and number
const getNameAndNumber = (infoPokemon) => {
  let name;
  for (let i = 0; i != infoPokemon.names.length; i++) {
    if (infoPokemon.names[i].language.name === 'es') {
      name = infoPokemon.names[i].name;

      return {
        name: name,
        number: infoPokemon.id,
      };
    }
  }
};

// Get sprites, if there are not "official-artwork" sprite, brings game sprite instead.
const getSprites = (spriteTypeStatsData) => {
  const normalSprite = spriteTypeStatsData.sprites.other['official-artwork'].front_default
    ? spriteTypeStatsData.sprites.other['official-artwork'].front_default
    : spriteTypeStatsData.sprites.other['home'].front_default;

  const shinySprite = spriteTypeStatsData.sprites.other['official-artwork'].front_shiny
    ? spriteTypeStatsData.sprites.other['official-artwork'].front_shiny
    : spriteTypeStatsData.sprites.other['home'].front_shiny;
  return {
    normalSprite: normalSprite,
    shinySprite: shinySprite,
  };
};

// Get types
const getTypes = (spriteTypeStatsData) => {
  const type1 = spriteTypeStatsData.types[0].type.name;
  const type2 = spriteTypeStatsData.types[1]?.type.name;
  return {
    type1: type1,
    type2: type2,
  };
};

// Get pokemon description
const getPokemonDescription = (infoPokemon) => {
  // If there aren't any description for a pokemon
  if (infoPokemon.genera.length === 0) {
    const noDescription = 'No hay descripción para este pokémon';
    return noDescription;
  }

  for (let i = 0; i < infoPokemon.genera.length; i++) {
    if (infoPokemon.genera[i].language.name === 'es') {
      return infoPokemon.genera[i].genus;
    } else if (infoPokemon.genera[i].language.name === 'en') {
      return infoPokemon.genera[i].genus;
    }
  }
};

// Get pokedex description
const getPokedexDescription = (infoPokemon) => {
  // If there aren't any pokedex description for any pokemon
  if (infoPokemon.flavor_text_entries.length === 0) {
    const noDescription = 'No hay descripción de pokédex para este pokémon';
    return noDescription;
  }

  for (let i = 0; i < infoPokemon.flavor_text_entries.length; i++) {
    let language = infoPokemon.flavor_text_entries[i].language.name === 'es';
    let game;

    // Tries with pokemon x description
    if (infoPokemon.flavor_text_entries[i].version.name === 'x') {
      game = infoPokemon.flavor_text_entries[i].version.name === 'x';
    }

    // If there arent, tries with pokemon sword
    if (infoPokemon.flavor_text_entries[i].version.name === 'sword') {
      game = infoPokemon.flavor_text_entries[i].version.name === 'sword';
    }

    // If there arent, tries with pokemon scarlet, and if there arent in spanish, then catch the enlish one
    if (infoPokemon.flavor_text_entries[i].version.name === 'scarlet') {
      if (infoPokemon.flavor_text_entries[i].language.name === 'es') {
        language = language = infoPokemon.flavor_text_entries[i].language.name === 'es';
      } else {
        language = infoPokemon.flavor_text_entries[i].language.name === 'en';
      }
      game = infoPokemon.flavor_text_entries[i].version.name === 'scarlet';
    }

    // If there arent, tries with pokemon legends-arceus, and if there arent in spanish, then catch the enlish one
    if (infoPokemon.flavor_text_entries[i].version.name === 'legends-arceus') {
      if (infoPokemon.flavor_text_entries[i].language.name === 'es') {
        language = language = infoPokemon.flavor_text_entries[i].language.name === 'es';
      } else {
        language = infoPokemon.flavor_text_entries[i].language.name === 'en';
      }
      game = infoPokemon.flavor_text_entries[i].version.name === 'legends-arceus';
    }

    if (language && game) {
      return infoPokemon.flavor_text_entries[i].flavor_text;
    }
  }
};

// Get pre-evolution:
const getPreEvolution = (infoPokemon) => {
  if (infoPokemon.evolves_from_species) {
    return infoPokemon.evolves_from_species.name;
  }
};

// Get Evolution
const getEvolution = (evolutionData, infoPokemon) => {
  // If its first evolution
  if (evolutionData.chain.species.name === infoPokemon.name) {
    const evolution = {
      ev1: evolutionData.chain.evolves_to[0]?.species.name,
      ev2: evolutionData.chain.evolves_to[1]?.species.name,
    };
    return evolution;
  }

  // If isn't first evolution
  if (evolutionData.chain.evolves_to[0]?.species.name === infoPokemon.name) {
    const evolution = {
      ev1: evolutionData.chain.evolves_to[0]?.evolves_to[0]?.species.name,
      ev2: evolutionData.chain.evolves_to[0]?.evolves_to[1]?.species.name,
    };
    return evolution;
  }
};

// Get pokemon stats
const getPokemonStats = (spriteTypeStatsData) => {
  const pokemonStats = {
    hp: spriteTypeStatsData.stats[0].base_stat,
    at: spriteTypeStatsData.stats[1].base_stat,
    def: spriteTypeStatsData.stats[2].base_stat,
    atEsp: spriteTypeStatsData.stats[3].base_stat,
    defEsp: spriteTypeStatsData.stats[4].base_stat,
    vel: spriteTypeStatsData.stats[5].base_stat,
  };
  return pokemonStats;
};

// Get legendary or mythical
const getCategory = (infoPokemon) => {
  return {
    isLegendary: infoPokemon.is_legendary,
    isMythical: infoPokemon.is_mythical,
  };
};
