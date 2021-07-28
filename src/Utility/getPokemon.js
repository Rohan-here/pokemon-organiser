const axios = require('axios').default;
export const getPokemon = async (name) => {
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const { data } = result;
    console.log(data);
    return data;
}
