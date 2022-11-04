import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function CateringPage(){

    return(
        <div className='catering-page'>
            <h2>Catering Page Title</h2>
            <div>
            <ContainerTwo />
            <ContainerOne />
            </div>
            <ContainerTwo />
        </div>
    )
}