import React from "react";
import ContainerOne from "../../components/ContainerOne";
import StoreHours from "./StoreHours";
import ContactForm from "./ContactForm";
import WeeklyAd from "../WeeklyAd/WeeklyAd";

export default function Contact() {



  const blockTwo = {
    title: "WeeklyAd Preview",
    description: "",
    image: "",
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <StoreHours />
        <ContactForm />
      </div>
      <a href="/weekly-ad"><WeeklyAd /></a>
    </div>
  );
}
