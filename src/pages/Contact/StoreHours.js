import React from "react";

export default function StoreHours() {
  const pageData = {
    title: "Loading content",
    description: "...",
    image: require("../../assets/img/test_image_2.png"),
  };

  const hours = [
    { day: "SUN", hours: ["8AM", "7PM"] },
    { day: "MON", hours: ["7AM", "8PM"] },
    { day: "TUES", hours: ["7AM", "8PM"] },
    { day: "WED", hours: ["7AM", "8PM"] },
    { day: "THURS", hours: ["7AM", "8PM"] },
    { day: "FRI", hours: ["7AM", "8PM"] },
    { day: "SAT", hours: ["7AM", "8PM"] },
  ];

  const data = {
    address: "665 W Lancaster Rd, Orlando, FL 32809",
    phone: "407-582-0140",
    email: "plazatropical@cfl.rr.com" }

  return (
    <div className="container-two store-hours">
    <section>
      <h2>Store Hours</h2>
      <table>
        {hours.map((day) => {
          return (
            <tr>
              <td>{day.day}</td>
              <td>{day.hours[0]} - {day.hours[1]}</td>
            </tr>
          );
        })}
      </table>
      </section>
      <section>
      <h2>Contact Info</h2>
      <address>{data.address}</address>
      <phone>{data.phone}</phone>
      <email>{data.email}</email>
      </section>
    </div>
  );
}
