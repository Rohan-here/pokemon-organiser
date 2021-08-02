import React from 'react';
import defaultImg from '../Utility/defaultImg.jpg'
import GithubImage from '../Utility/GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
const Footer = () => {
    return (
        <div className='w-screen bg-blue-800 text-white font-bold h-18 flex flex-col items-center justify-center p-2'>


            <span>
                Created By Rohan Gupta, DTU
            </span>
            <a href='https://github.com/Rohan-here' target='_blank' rel="noreferrer">
                <img className='inline mx-2 my-2' src={GithubImage} alt={defaultImg} />
            </a>

        </div>
    )
}

export default Footer;