import React, { useEffect } from 'react';
import defaultImg from '../Utility/defaultImg.jpg'
import closeIcon from '../Utility/closeicon.png'
const SelectBar = ({ selected, remove }) => {
    console.log(selected)
    return (
        <div className='w-screen flex flex-row justify-around my-3  mini:overflow-x-scroll' >
            {
                selected.pokemons.map(ele =>
                (
                    <div className='py-2 px-4 flex flex-col items-end '>
                        <button className='h-4 w-4 flex' onClick={() => remove(ele)}>
                            <img src={closeIcon} alt={defaultImg}></img>
                        </button>
                        <img src={ele.sprites.front_default} alt={defaultImg} />
                    </div>
                )

                         
}

        </div>
    )
}

export default SelectBar;