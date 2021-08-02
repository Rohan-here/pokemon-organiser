/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { getPage } from "../Utility/getPage";
import { getPokemon } from '../Utility/getPokemon'
import { useCallback } from "react";
const initialState = {
    pokemons: [],
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [next, setNext] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchPokemons = useCallback(async () => {
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
    })

    useEffect(() => {
        fetchPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!isLoadingMore) return;

        fetchPokemons();
        setIsLoadingMore(false);
    }, [fetchPokemons, isLoadingMore, state.pokemons])
    return { state, loading, next, error, setIsLoadingMore };
}