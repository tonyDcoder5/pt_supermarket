import React from 'react'
import ContainerOne from '../../components/ContainerOne'
import ContainerTwo from '../../components/ContainerTwo'
import CateringForm from './CateringForm'
import CateringMenu from './CateringMenu'
import LunchMenu from './LunchMenu'


export default function CateringPage(){

    const blockOne = {
        title: "Catering Menu",
        description: "Catering menu description",
        image: "../assets/img/test_image_3.jpeg", 
    }

    const blockTwo = {
        title: "Catering Scheduling Form",
        description: "connect scheduling form to live google sheets/email",
        image: "../assets/img/test_image_2.jpeg", 
    }

    const blockThree = {
        title: "Lunch Menu ",
        description: "",
        image: "../assets/img/test_image_4.jpeg", 
    }

    return(
        <div className='catering-page'>
            <div className='catering-block'>
            <CateringMenu />
            <CateringForm />
            </div>
            <LunchMenu />
        </div>
    )
}