import React from 'react';
import defaultImg from '../Utility/defaultImg.jpg'
import closeIcon from '../Utility/closeicon.png'
const SelectBar = ({ selected, setSelected }) => {


    return (
        <div className='w-screen flex flex-row justify-around my-3' >
            {
                selected.pokemons.map(ele => (
                    <div className='p-2 flex flex-col items-end'>
                        <button className='h-4 w-4 flex items-end' onClick={
                            () => {
                                console.log(ele)
                                var index = selected.pokemons.indexOf(ele);
                                if (index > -1) {
                                    selected.pokemons.splice(index, 1)
                                }
                            }
                        }>
                            <img src={closeIcon} alt={defaultImg}></img>
                        </button>
                        <img src={ele.sprites.front_default} alt={defaultImg} />
                    </div>

                ))
            }
        </div>
    )
}

export default SelectBar;