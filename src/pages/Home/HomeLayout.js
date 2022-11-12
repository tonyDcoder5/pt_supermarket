import React from "react";
import ContainerOne from "../../components/ContainerOne";
import WeeklyAd from "../WeeklyAd/WeeklyAd";
import ContainerTwo from "../../components/ContainerTwo";

export default function HomeLayout() {
  const blockOne = {
    title: "Services Block",
    description: "List available services and offers",
    image: "../assets/img/test_image_1.jpeg",
  };

  const blockTwo = {
    title: "Weekly Ad Preview",
    description: "",
    image: "../assets/img/test_image_2.png",
  };

  const blockThree = {
    title: "Gallery Preview block",
    description: "Gallery PlaceHolder",
    image: "../assets/img/test_image_3.jpeg",
  };

  const blockFour = {
    title: "Directions/Location Google Maps Plugin",
    description: "",
    image: "../assets/img/test_image_4.jpeg",
  };

  return (
    <div className="home">
      <div className="section-one">
        <ContainerOne content={blockOne} />
          <WeeklyAd />
          <a href="/weekly-ad"><button>Ad Page</button></a>
      </div>
      <div className="section-two">
        <ContainerOne content={blockThree} />{" "}
        <ContainerTwo content={blockFour} />
      </div>
    </div>
  );
}
