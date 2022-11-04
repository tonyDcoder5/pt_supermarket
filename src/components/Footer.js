import React from 'react'
import NavBar from './NavBar'
import { SocialIcon } from "react-social-icons";

export default function Footer(){

    const logo = require("../assets/img/placeholder_logo.png")


    const data = {
        address: "665 W Lancaster Rd, Orlando, FL 32809",
        phone: "407-582-0140",
        email: "plazatropical@cfl.rr.com",
        hours: [
            {day: "SUN", hours: ["8AM", "7PM"] },
            {day: "MON", hours: ["7AM", "8PM"] },
            {day: "TUES", hours: ["7AM", "8PM"] },
            {day: "WED", hours: ["7AM", "8PM"] },
            {day: "THURS", hours: ["7AM", "8PM"] },
            {day: "FRI", hours: ["7AM", "8PM"] },
            {day: "SAT", hours: ["7AM", "8PM"] },
        ]
    }


    return(
        <div className='footer'>            
        <NavBar />
        <footer className='row'>
        <div className='col contact-info'>
            <h2>Address</h2>
            <h3>{data.address}</h3>
            <h5>{data.phone}</h5>
            <p>{data.email}</p>
            <div id="socials">
          <SocialIcon url="https://www.facebook.com/profile.php?id=100063493482937/" target="_blank" /> 
          <SocialIcon url="https://www.instagram.com/plazatropical/" target="_blank" /> 
          </div>            </div>
            <div className='col brand'>
                <img alt='logo' src={logo} />
            <h1>Plaza Tropical Supermarket Inc</h1>
            </div>
            <div className='col hours' >
                <h2>Hours</h2>
                {data.hours.map(({day, hours})=>{
                    return (
                            <p>{day}: {hours[0]} - {hours[1]}</p>
                    )
                })}
            </div>
        </footer>
        </div>
    )
}