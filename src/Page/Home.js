import React from "react";

//components
import Header from "../components/Header";
import Loading from "../components/Spinner";


//hooks
import { useHomeFetch } from "../hooks/getPokemonPage";


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);
    return (
        <>
            {
                state.pokemons.map(element => (
                    <div>
                        {element.name}
                    </div>
                ))
            }

            {loading && <Loading />}
        </>
    )
}

export default Home;