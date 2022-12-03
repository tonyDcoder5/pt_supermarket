import React, { useEffect, useState } from "react";
import ContainerTwo from "../../components/ContainerTwo";

export default function CateringMenu() {
  const [display, setDisplay] = useState(null);

  const cateringMenu = [
    {
      type: "",
      name: "",
      smSize: 0,
      lgSize: 0,
    },
  ];

  const catering = {
    Platters: [
      {
        type: "Vianda",
        name: "BANDEJA DE GUINEO EN ESCABECHE",
        smSize: 25,
        lgSize: 40,
      },
      {
        type: "Vianda",
        name: "BANDEJA DE MADUROS",
        smSize: 30,
        lgSize: 50,
      },
      {
        type: "Vianda",
        name: "BANDEJA DE TOSTONES",
        smSize: 35,
        lgSize: 55,
      },
      {
        type: "Vianda",
        name: "BANDEJA DE MANGU",
        smSize: 35,
        lgSize: 55,
      },
      {
        type: "Vianda",
        name: "BANDEJA DE PURE DE PAPA",
        smSize: 25,
        lgSize: 40,
      },
      {
        type: "Vianda",
        name: "BANDEJA DE YUCA",
        smSize: 20,
        lgSize: 35,
      },
    ],
    Rice: [
      {
        type: "Arroz",
        name: "BANDEJA DE ARROZ BLANCO",
        smSize: 25,
        lgSize: 40,
      },
      {
        type: "Arroz",
        name: "BANDEJA DE ARROZ CON GANDULES",
        smSize: 30,
        lgSize: 50,
      },
      {
        type: "Arroz",
        name: "BANDEJA DE ARROZ CONGRI",
        smSize: 30,
        lgSize: 50,
      },
      {
        type: "Arroz",
        name: "BANDEJA DE ARROZ MORO",
        smSize: 30,
        lgSize: 50,
      },
      {
        type: "Arroz",
        name: "BANDEJA DE ARROZ CON VEGETALES",
        smSize: 30,
        lgSize: 50,
      },
      {
        type: "Arroz",
        name: "HABICHUELAS VASO DE 32 OZ",
        smSize: 9,
        lgSize: 0,
      },
    ],
    Salad: [
      {
        type: "Ensaladas",
        name: "BANDEJA DE ENSALADA DE PAPA",
        smSize: 25,
        lgSize: 40,
      },
      {
        type: "Ensaladas",
        name: "BANDEJA DE ENSALADA VERDE",
        smSize: 25,
        lgSize: 40,
      },
      {
        type: "Ensaladas",
        name: "BANDEJA DE ENSALADA DE CODITOS",
        smSize: 30,
        lgSize: 50,
      },
    ],
    Fish: [
      {
        type: "Pescado",
        name: "BANDEJA DE BACALAO",
        smSize: 45,
        lgSize: 80,
      },
    ],
    Beef: [
      {
        type: "Carne De Res",
        name: "BANDEJA DE CARNE GUISADA",
        smSize: 55,
        lgSize: 95,
      },
      {
        type: "Carne De Res",
        name: "BANDEJA DE ROPA VIEJA",
        smSize: 60,
        lgSize: 110,
      },
      {
        type: "Carne De Res",
        name: "BANDEJA DE ALBONDIGAS",
        smSize: 45,
        lgSize: 80,
      },
    ],
    Pork: [
      {
        type: "Carne De Cerdo",
        name: "PERNIL DELANTERO",
        smSize: 29.99,
        lgSize: 0,
      },
      {
        type: "Carne De Cerdo",
        name: "PERNIL TRASERO",
        smSize: 60,
        lgSize: 0,
      },
      {
        type: "Carne De Cerdo",
        name: "BANDEJA DE PERNIL",
        smSize: 50,
        lgSize: 90,
      },
      {
        type: "Carne De Cerdo",
        name: "BANDEJA DE COSTILLAS DE CERDO",
        smSize: 45,
        lgSize: 85,
      },
    ],
    Poultry: [
      {
        type: "Aves",
        name: "PAVO HORNEADO",
        smSize: 65,
        lgSize: 0,
      },
      {
        type: "Aves",
        name: "POLLO ENTERO",
        smSize: 7.99,
        lgSize: 0,
      },
      {
        type: "Aves",
        name: "BANDEJA DE MUSLO Y CADERA FRITO",
        smSize: 30,
        lgSize: 55,
      },
      {
        type: "Aves",
        name: "BANDEJA DE MUSLO Y CADERA GUISADO",
        smSize: 30,
        lgSize: 55,
      },
      {
        type: "Aves",
        name: "BANDEJA DE MUSLO/CADERA HORNEADO",
        smSize: 30,
        lgSize: 55,
      },
      {
        type: "Aves",
        name: "BANDEJA DE POLLO HORNEADO",
        smSize: 35,
        lgSize: 60,
      },
      {
        type: "Aves",
        name: "BANDEJA DE POLLO GUISADO",
        smSize: 35,
        lgSize: 60,
      },
    ],
  };

  const handleDisplay = (e) => {
    setDisplay(catering[e.target.value]);
  };

  return (
    <div className="container-one catering-select">
        <label htmlFor="dishes">Select a Catering Category: </label>
        <select name="dishes" id="dishes" onChange={handleDisplay}>
          <option value="">Select dish:</option>
          {Object.keys(catering).map((key, index) => {
            return <option value={key}>{key}</option>;
          })}
        </select>
        <div className="catering-menu">
              {display &&
                display.map((item) => {
                  return (
                    <section className="menu-item">
                      <img
                        src={require("../../assets/img/test_image_1.jpeg")}
                      />
                      <div>
                        <p>{item.name}</p>
                        <span>
                          Sm: ${item.smSize} || Lg: ${item.lgSize}
                        </span>
                      </div>
                    </section>
                  );
                })}
        </div>
      </div>
  );
}
