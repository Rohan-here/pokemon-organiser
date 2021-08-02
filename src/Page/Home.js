import React from "react";
// import defaultImg from '../Utility/defaultImg.jpg';
//components

import Loading from "../components/Spinner";
import ShowMore from "../components/ShowMore";
import Wrapper from "../components/Wrapper";
import PokemonThumb from '../components/PokemonThumb';
//hooks
import { useHomeFetch } from "../hooks/getPokemonPage";


const Home = () => {
    const { state, loading, error, setIsLoadingMore } = useHomeFetch();

    if (error) {
        return (
            <div>
                AN ERROR OCCURED :(
            </div>
        )
    }
    return (
        <>
            <Wrapper child={state.pokemons.map(element => (
                <PokemonThumb pokemon={element} key={element.id} />
            ))} />


            {loading && <Loading />}
            {state.pokemons.length < 802 && !loading && <ShowMore callback={() => setIsLoadingMore(true)} />}
        </>
    )
}

export default Home;