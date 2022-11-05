import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'
import ContactForm from './ContactForm'


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
            <h2>Contact Us!</h2>
            <ContactForm />
            {/* <ContainerTwo content={blockOne} /> */}
            <ContainerOne content={blockTwo} />
        </div>

    )
}