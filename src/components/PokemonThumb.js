import React from 'react';
import defaultImg from '../Utility/defaultImg.jpg';
import { heightConvert, weightConvert } from '../Utility/unitConvert';
import { firstUpper } from '../Utility/stringConvert';

const PokemonThumb = ({ pokemon, callback, isSelected }) => {
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
        <button className='flex items-center justify-center' onClick={callback}>
            <div className={`border-4 ${isSelected && 'bg-red-300'} border-black rounded-lg w-thumbSize my-1 flex flex-row mini:w-mobileSize`}>

                <img src={Pokemon.front_img} alt={defaultImg} className='px-3 mini:h-20 ' />
                <div className='flex flex-col font-Jura py-1 px-2 mini:text-sm w-60 ml-3' >
                    <span> Index : {Pokemon.id} </span>
                    <span> Name : {Pokemon.name.toUpperCase()}</span>
                    <span> Height : {heightConvert(Pokemon.height)}</span>
                    <span> Weight : {weightConvert(Pokemon.weight)} </span>
                </div>
                <div className='flex flex-col items-center justify-center ml-3'>
                    {Pokemon.types.map(type => (
                        <span className={`font-mono text-white bg-${type} my-1 rounded-lg text-center p-1`}>{firstUpper(type)}</span>
                    ))}
                </div>
            </div>
        </button>
    )
}

export default PokemonThumb;