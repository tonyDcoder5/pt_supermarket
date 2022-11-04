import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function CateringPage(){

    const blockOne = {
        title: "Catering Block One",
        description: "Catering description one",
        image: "../assets/img/test_image_3.jpeg", 
    }

    const blockTwo = {
        title: "Catering Block Two",
        description: "Catering description Two",
        image: "../assets/img/test_image_2.jpeg", 
    }

    const blockThree = {
        title: "Catering Block Three",
        description: "Catering description Three",
        image: "../assets/img/test_image_4.jpeg", 
    }

    return(
        <div className='catering-page'>
            <h2>Catering Page Title</h2>
            <div>
            <ContainerTwo content={blockOne} />
            <ContainerOne content={blockTwo} />
            </div>
            <ContainerTwo content={blockThree} />
        </div>
    )
}