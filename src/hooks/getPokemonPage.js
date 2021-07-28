import { useState, useEffect } from "react";
import { getPage } from "../Utility/getPage";
import { getPokemon } from '../Utility/getPokemon'
const initialState = {
    pokemons: [],
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(null);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            setError(false);
            const pokemonNext = await getPage(next);
            const { results, previous } = pokemonNext;
            const pokemonData = [];
            for (let pokeData of results) {
                const temp = await getPokemon(pokeData.name);
                pokemonData.push(temp);
            }
            setNext(pokemonNext.next);
            setState(prev => ({
                pokemons: previous == null ? [...pokemonData] : [...prev.pokemons, ...pokemonData]
            }))
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        console.log('UwU');
        fetchPokemons();
    }, [])
    return { state, loading, error };
}