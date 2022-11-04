import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'


export default function WeeklyAd(){

    const blockOne = {
        title: "Weekly Ad Title",
        description: "Weekly Ad placeholder",
        image: ""
    }

    const blockTwo = {
        title: "Weekly Ad Block two",
        description: "Weekly Ad block two placeholder",
        image: ""
    }

    return(
        <div className='weekly-ad'>
            <h2>WeeklyAd Page Title</h2>
            <ContainerTwo content={blockOne}  />
            <ContainerOne content={blockTwo}  />
        </div>
    )
}