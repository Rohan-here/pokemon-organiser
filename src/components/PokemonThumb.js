import React from 'react';
import defaultImg from '../Utility/defaultImg.jpg';
const PokemonThumb = ({ pokemon }) => {
    const Pokemon = {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        front_img: pokemon.sprites.front_default,
        back_img: pokemon.sprites.back_default,
        types: pokemon.types.map(ele => (ele.type.name))
    }
    return (
        <div className='border-2 border-black rounded-lg'>
            <img src={Pokemon.front_img} alt={defaultImg} />
            <div className='font-Jura'> {Pokemon.name + Pokemon.id}</div>
        </div>
    )
}

export default PokemonThumb;