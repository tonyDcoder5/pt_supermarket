import React from "react";
import ContainerTwo from "../../components/ContainerTwo";

export default function LunchMenu() {
  const menuPrices = {
    regLunch: [5.49, 7.49],
    premLunch: [7, 12],
    lunchSpecial: [6, 10],
  };

  const entrees = {
    regLunch: [
      "Steamed Chicken",
      "Oven Chicken",
      "Beef",
      "Sierra Fish",
      "Chicken Wings",
      "Tilipia",
      "Oven Baked Ribs",
      "Seasoned Steak",
      "Beef Fajitas",
    ],
    premLunch: ["Red Snapper", "Salmon", "Pargo", "Shrimp"],
    lunchSpecial: [
      "Mondongo",
      "Cuajito",
      "Caldo De Patita De Cerdo",
      "Sancocho",
    ],
  };

  const sides = {
    rice: [
      "Pasta",
      "White Rice",
      "Yellow Rice",
      "Rice w/ Vegatables",
      "Brown Rice (congri)",
      "Rice w/ Red Beans",
      "Concon",
    ],
    beans: [
      "Read Beans",
      "White Beans",
      "Black Beans",
      "Garbanzo Beans",
      "Lentils",
      "Pigeon Peas",
    ],
    extras: [
      "Fried Plaintains (Tostones)",
      "Sweet Plaintains",
      "French Fries",
      "Steamed Yuca",
      "Steamed Bananas",
    ],
  };

  return (
    <div className="container-two lunch-menu">
      <div className="main-entrees">
        <section className="regular-entrees">
          <h3>
            Small: {menuPrices.regLunch[0]} | | Large: {menuPrices.regLunch[1]}
          </h3>
          <h4>Regular Entrees</h4>
          <ul>
            {entrees.regLunch.map((entree) => {
              return (
                <li className="menu-item">
                  <img src={require("../../assets/img/test_image_1.jpeg")} />
                  <p>{entree}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="premium-entrees">
          <h3>
            Small: {menuPrices.premLunch[0]} | | Large:{" "}
            {menuPrices.premLunch[1]}
          </h3>
          <h4>Premium Entrees</h4>
          <ul>
            {entrees.premLunch.map((entree) => {
              return (
                <li className="menu-item">
                  <img src={require("../../assets/img/test_image_1.jpeg")} />
                  <p>{entree}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <section className="sides-div">
        <h4>Sides</h4>
        <div className="sides">
        <ul>
          <h5>Portion One</h5>
          {sides.rice.map((side) => {
            return (
              <li className="menu-item">
                <img src={require("../../assets/img/test_image_1.jpeg")} />
                <p>{side}</p>
              </li>
            );
          })}
        </ul>
        <ul>
          <h5>Portion Two</h5>
          {sides.beans.map((side) => {
            return (
              <li className="menu-item">
                <img src={require("../../assets/img/test_image_1.jpeg")} />
                <p>{side}</p>
              </li>
            );
          })}
        </ul>
        <ul>
          <h5>Portion Three</h5>
          {sides.extras.map((side) => {
            return (
              <li className="menu-item">
                <img src={require("../../assets/img/test_image_1.jpeg")} />
                <p>{side}</p>
              </li>
            );
          })}
        </ul>
        </div>
      </section>
      <h3>
        Small: {menuPrices.lunchSpecial[0]} | | Large:
        {menuPrices.lunchSpecial[1]}
      </h3>
      <div className="lunch-special">
        <section className="special-entrees">
          <h4>Entrees</h4>
          <ul>
            {entrees.lunchSpecial.map((entree) => {
              return (
                <li className="menu-item">
                  <img src={require("../../assets/img/test_image_1.jpeg")} />
                  <p>{entree}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="special-sides">
          <h4>Sides</h4>
          <ul>
            {sides.rice.map((side) => {
              return (
                <li className="menu-item">
                  <img src={require("../../assets/img/test_image_1.jpeg")} />
                  <p>{side}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
