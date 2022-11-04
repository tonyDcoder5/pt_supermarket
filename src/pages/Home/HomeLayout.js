import React from "react";
import ContainerOne from "../../components/ContainerOne";
import ContainerTwo from "../../components/ContainerTwo";

export default function HomeLayout() {
  return (
    <div className="home">
      <h2>Home Page Title</h2>
      <div className="section-one">
        <ContainerOne />
        <ContainerTwo />
      </div>
      <div className="section-two">
        <ContainerTwo /> <ContainerOne />
      </div>
    </div>
  );
}
