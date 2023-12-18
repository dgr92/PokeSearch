// Buscar toda la información de un pokémon en concreto
export const getPkmnInfo = async (pokemon) => {
    
    try {
        await fetch(pokemon.url)
            .then((responsePkmn) => responsePkmn.json())
            .then((dataPkmn) => {
                console.log(dataPkmn)      //TODO: Eliminar

                return dataPkmn;
            });
            
    } catch (e) {
        console.log(e);
    }
};