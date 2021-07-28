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
            console.log(results);
            console.log(pokemonNext.next);
            setNext(pokemonNext.next);
            setState(prev => ({
                ...results,
                pokemons: previous == null ? [...results] : [...prev.pokemons, ...results]
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