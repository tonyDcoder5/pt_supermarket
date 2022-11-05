import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function WeeklyAd(){

    const blockOne = {
        title: "Weekly Ad Full View",
        description: "stretch scroll animation to view full ad and embedded link for downloadable version",
        image: ""
    }

    return(
        <div className='weekly-ad'>
            <ContainerTwo content={blockOne}  />
        </div>
    )
}