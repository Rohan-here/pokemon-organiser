import React from "react";
import defaultImg from '../Utility/defaultImg.jpg'
//components

import Loading from "../components/Spinner";
import ShowMore from "../components/ShowMore";

//hooks
import { useHomeFetch } from "../hooks/getPokemonPage";


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);
    return (
        <>
            {
                state.pokemons.map(element => (
                    <img alt={defaultImg} src={element.sprites.back_default}>

                    </img>
                ))
            }

            {loading && <Loading />}
            <ShowMore></ShowMore>
        </>
    )
}

export default Home;