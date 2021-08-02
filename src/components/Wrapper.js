import React from 'react';
const Wrapper = ({ child }) => {
    return (
        <div className='my-5 mx-auto px-5 py-0 grid gap-2 grid-flow-row grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 justify-center'>
            {child}
        </div>
    )
}

export default Wrapper;