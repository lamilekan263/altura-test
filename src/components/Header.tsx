import React from 'react'
import { Link, useMatch } from 'react-router-dom';
import AlturaLogo from "../assets/Altura-Logo.svg";

const Header = () => {

    const isMatch = useMatch('/')

    return (
        <header className='flex flex-row items-center gap-5 text-white '>

            {isMatch === null && (<Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            </Link>
            )}

            <Link to="/" className='flex items-center gap-1 '>
                <img src={AlturaLogo} alt="" />
                <span className='font-bold text-xl'>Altura Test</span>
            </Link>

        </header>
    )
}

export default Header