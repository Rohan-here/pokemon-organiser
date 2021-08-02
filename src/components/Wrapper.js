import React from 'react';
const Wrapper = ({ child }) => {

    return (
        <div className='m-0 px-5 py-0 flex flex-col w-screen items-center'>
            {child}
        </div>
    )
}

export default Wrapper;