import React from "react";
import { useState } from "react";
// import defaultImg from '../Utility/defaultImg.jpg';
//components
import SelectBar from "../components/SelectBar";
import Loading from "../components/Spinner";
import ShowMore from "../components/ShowMore";
import Wrapper from "../components/Wrapper";
import PokemonThumb from '../components/PokemonThumb';
import Footer from "../components/Footer";

//hooks
import { useHomeFetch } from "../hooks/getPokemonPage";

const initialState = {
    pokemons: []
}

const Home = () => {

    const [selected, setSelected] = useState(initialState);
    //const [selecting, setSelecting] = useState(false);

    const handleSelected = (element) => {
        const found = selected.pokemons.find(ele => ele === element)
        if (found) return true;
        return false;
    }

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
            <SelectBar selected={selected} setSelected={setSelected} />

            <Wrapper className="m-4" child={state.pokemons.map(element => (
                <PokemonThumb pokemon={element} key={element.id}
                    isSelected={handleSelected(element)}
                    callback=
                    {
                        () => {
                            if (selected.pokemons.length === 6) {
                                alert(`Can not add more than 6 Pokemon in a team`)
                            }
                            else if (handleSelected(element)) {
                                alert('Pokemon already selected')
                            }
                            else {
                                setSelected(prev => ({
                                    pokemons: !selected.pokemons.length ? [element] : [...prev.pokemons, element]
                                }))
                            }
                        }}
                />
            ))} />


            {loading && <Loading />}
            {state.pokemons.length < 802 && !loading && <ShowMore callback={() => setIsLoadingMore(true)} />}
            {!loading && <Footer />}
        </>
    )
}

export default Home;