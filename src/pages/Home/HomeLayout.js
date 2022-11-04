import React from "react";
import ContainerOne from "../../components/ContainerOne";
import ContainerTwo from "../../components/ContainerTwo";

export default function HomeLayout() {

  const blockOne = {
    title: "Home Page Block One Title",
    description: "Home Page Block One Description",
    image: "../assets/img/test_image_1.jpeg",
  }

 const blockTwo = {
    title: "Home Page Block Two Title",
    description: "Home Page Block Two Description",
    image: "../assets/img/test_image_2.png",
    
  }


 const blockThree = {
  title: "Home Page Block Three Title",
  description: "Home Page Block Three Description",
  image: "../assets/img/test_image_3.jpeg",
  
}

const blockFour = {
   title: "Home Page Block Three Title",
   description: "Home Page Block Three Description",
   image: "../assets/img/test_image_4.jpeg",
  
 }



  return (
    <div className="home">
      <h2>Home Page Title</h2>
      <div className="section-one">
        <ContainerOne content={blockOne} />
        <ContainerTwo content={blockTwo} />
      </div>
      <div className="section-two">
        <ContainerTwo content={blockThree} /> 
        
        <ContainerOne content={blockFour} />
      </div>
    </div>
  );
}
