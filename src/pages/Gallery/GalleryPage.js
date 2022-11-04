import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function GalleryPage(){

    return(
        <div className='gallery-page'>
            <h2>Gallery Page Title</h2>
            <ContainerOne />
            <ContainerTwo />
        </div>
    )
}