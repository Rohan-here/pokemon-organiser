import React from "react";

const ShowMore = ({ callback }) => {
    return (
        <button className='block w-60 text-2xl border-4 border-black rounded-full my-5 py-3 px-2 font-bold mx-auto' onClick={callback}>
            Show More
        </button >
    )
}

export default ShowMore;