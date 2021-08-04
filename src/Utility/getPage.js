const axios = require('axios').default;

export const getPage = async (next) => {
    let pokemons = next == null ?
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        :
        await axios.get(next);

    const { data } = pokemons;
    return data;
}
