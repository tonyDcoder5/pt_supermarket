import React from "react";
import ContainerOne from "../../components/ContainerOne";
import ContainerTwo from "../../components/ContainerTwo";

import adPDF from "../../assets/docs/110322_weeklyad.pdf";

export default function WeeklyAd() {
  const blockOne = {
    title: "Weekly Ad Full View",
    description:
      "stretch scroll animation to view full ad and embedded link for downloadable version",
    image: "",
  };

  return (
    <div className="weekly-ad">
      <iframe title="weekly-ad-1103" type="application/pdf" src={adPDF} width= "500" height= "375" />

    </div>
  );
}
