import React from 'react'
import NavBar from './NavBar'


export default function Header(){

    return(
        <>
        <header>
            <div>
            <h2>Address & Contact info</h2>
            {/* Insert address */}
            </div>
            <div>
                <img alt='logo' />
            <h1>Plaza Tropical Supermarket Inc</h1>
            </div>
            <div>
                {/* Insert hours and contact */}
                <h2>Hours info</h2>
            </div>
        </header>
        </>
    )
}