import React from 'react'
import ContainerTwo from '../../components/ContainerTwo'


export default function LunchMenu(){

    const blockOne = {
        title: "Catering Menu",
        description: "Catering menu description",
        image: "../assets/img/test_image_3.jpeg", 
    }

    return(
        <div className='catering-page'>
            <div className='catering-block'>
            <ContainerTwo content={blockOne} />
            </div>
        </div>
    )
}