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
      "Oven Baked Chicken",
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
          <h3>Small: {menuPrices.regLunch[0]} || Large: {menuPrices.regLunch[1]}</h3>
          <ul>
            {entrees.regLunch.map((entree) => {
              return <li>{entree}</li>;
            })}
          </ul>
        </section>
        <section className="premium-entrees">
          <h3>Small: {menuPrices.premLunch[0]} || Large: {menuPrices.premLunch[1]}</h3>
          <ul>
            {entrees.premLunch.map((entree) => {
              return <li>{entree}</li>;
            })}
          </ul>
        </section>
      </div>
      <section className="sides">
        <ul>
          {sides.rice.map((side) => {
            return <li>{side}</li>;
          })}
        </ul>
        <ul>
          {sides.beans.map((side) => {
            return <li>{side}</li>;
          })}
        </ul>
        <ul>
          {sides.extras.map((side) => {
            return <li>{side}</li>;
          })}
        </ul>
      </section>
      <h3>Small: {menuPrices.lunchSpecial[0]} || Large: {menuPrices.lunchSpecial[1]}</h3>
      <div className="lunch-special">
        <section className="special-entrees">
          <ul>
            {entrees.lunchSpecial.map((entree) => {
              return <li>{entree}</li>;
            })}
          </ul>
        </section>
        <section className="special-sides">
          <ul>
            {sides.rice.map((side) => {
              return <li>{side}</li>;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
