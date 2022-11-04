import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function Contact(){

    const blockOne = {
        title: "Contact Title",
        description: "Contact Form placeholder",
        image: ""
    }

    const blockTwo = {
        title: "Contact Block two",
        description: "Contact block two placeholder",
        image: ""
    }

    return(
        <div className='contact-page'>
            <h2>Contact Page Title</h2>
            <ContainerTwo content={blockOne} />
            <ContainerOne content={blockTwo} />
        </div>
    )
}