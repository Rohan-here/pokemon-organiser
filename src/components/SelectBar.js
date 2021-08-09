import React from 'react';
import defaultImg from '../Utility/defaultImg.jpg'
const SelectBar = ({ selected }) => {

    return (
        <div >
            {
                selected.pokemons.map(ele => (
                    <img src={ele.sprites.front_default} alt={defaultImg} />
                ))
            }
        </div>
    )
}

export default SelectBar;