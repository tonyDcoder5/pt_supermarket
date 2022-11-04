import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function GalleryPage(){

    const blockOne = {
        title: "Gallery Title",
        description: "Gallery Carousel placeholder",
        image: ""
    }

    const blockTwo = {
        title: "Gallery Block two",
        description: "Gallery block two placeholder",
        image: ""
    }

    return(
        <div className='gallery-page'>
            <h2>Gallery Page Title</h2>
            <ContainerOne content={blockOne} />
            <ContainerTwo content={blockTwo}  />
        </div>
    )
}