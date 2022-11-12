import React from "react";
import ContainerOne from "../../components/ContainerOne";
import StoreHours from "./StoreHours";
import ContactForm from "./ContactForm";

export default function Contact() {



  const blockTwo = {
    title: "WeeklyAd Preview",
    description: "",
    image: "",
  };

  return (
    <div className="contact-page">
      <h2>Contact Us!</h2>
      <div className="contact-section">
        <StoreHours />
        <ContactForm />
      </div>
      <ContainerOne content={blockTwo} />
    </div>
  );
}
