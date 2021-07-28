import React from "react";
import defaultImg from '../Utility/defaultImg.jpg'
//components

import Loading from "../components/Spinner";
import ShowMore from "../components/ShowMore";

//hooks
import { useHomeFetch } from "../hooks/getPokemonPage";


const Home = () => {
    const { state, loading, error, setIsLoadingMore } = useHomeFetch();
    console.log(state);
    return (
        <>
            {
                state.pokemons.map(element => (
                    <img alt={defaultImg} src={element.sprites.front_default}>

                    </img>
                ))
            }

            {loading && <Loading />}
            {state.pokemons.length <= 1118 && <ShowMore callback={() => setIsLoadingMore(true)} />}
        </>
    )
}

export default Home;