import React from "react";

const ShowMore = ({ callback }) => {
    return (
        <button className='font-bold text-white bg-black' onClick={callback}>
            Show More
        </button >
    )
}

export default ShowMore;