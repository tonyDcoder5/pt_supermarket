import React from "react";
import ContainerOne from "../../components/ContainerOne";
import ContainerTwo from "../../components/ContainerTwo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const blockOne = {
    title: "Hours & contact info",
    description: "Contact info block",
    image: "",
  };

  const blockTwo = {
    title: "WeeklyAd Preview",
    description: "",
    image: "",
  };

  return (
    <div className="contact-page">
      <h2>Contact Us!</h2>
      <div className="contact-section">
        <ContainerTwo content={blockOne} />
        <ContactForm />
      </div>
      <ContainerOne content={blockTwo} />
    </div>
  );
}
