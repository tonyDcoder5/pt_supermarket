import React from "react";
import Carousel from "react-grid-carousel";

export default function GalleryGrid({ content = {} }) {
  var pageData = {
    title: "GalleryGrid Loading",
    description: "...",
    image: "../../assets/img/test_image_2.png",
    altText: "sample-text",
  };

  var imageGrid = [
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
  ];

  return (
    <div className="gallery-grid">
      <Carousel
        cols={3}
        rows={3}
        gap={1}
        containerStyle={{ background: "transparent" }}
        loop="infinite" 
      >
        {[...Array(18)].map((_, i) => (
          <Carousel.Item key={i}>
            <img src={require("../../assets/img/test_image_2.png")} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
