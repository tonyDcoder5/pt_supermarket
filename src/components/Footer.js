import React from 'react'
import NavBar from './NavBar'


export default function Footer(){

    return(
        <div className='footer'>            
        <NavBar />
        <footer>
        <div>
            <h2>Address & Contact info</h2>
            {/* Insert address */}
            </div>
            <div>
                <img alt='logo' />
            <h1>Plaza Tropical Supermarket Inc</h1>
            <h3>Social Media Icons</h3>
            </div>
            <div>
                {/* Insert hours and contact */}
                <h2>Hours info</h2>
            </div>
        </footer>
        </div>
    )
}