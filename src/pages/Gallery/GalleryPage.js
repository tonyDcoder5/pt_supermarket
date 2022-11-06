import React from "react";
import ContainerOne from "../../components/ContainerOne";
import ContainerTwo from "../../components/ContainerTwo";
import GalleryGrid from "./GalleryGrid";

export default function GalleryPage() {
  const blockOne = {
    title: "Gallery full view Section",
    description: "Gallery Carousel placeholder",
    image: "",
  };

  const blockTwo = {
    title: "Gallery grid preview section",
    description: "connect to google reviews",
    image: "",
  };

  const blockThree = {
    title: "Live reviews Section",
    description: "connect to google reviews",
    image: "",
  };




  return (
    <div className="gallery-page">
        <GalleryGrid />
        <ContainerOne content={blockThree} />
    </div>
  );
}
