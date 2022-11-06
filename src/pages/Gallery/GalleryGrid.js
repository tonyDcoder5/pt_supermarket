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
      <Carousel cols={3} rows={2} gap={5} loop>
        {[...Array(20)].map((block, i) => {
          return (
            <Carousel.Item key={i}>
              <img src="https://picsum.photos/800/600?random=1" />
             
            </Carousel.Item>
          );
        })}
       
      </Carousel>
    </div>
  );
}
