import React from "react";
import ContainerTwo from "../../components/ContainerTwo";

export default function CateringMenu() {
  const cateringMenu = [
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
    {
      type: "Pescado",
      name: "BANDEJA DE BACALAO",
      smSize: 45,
      lgSize: 80,
    },
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
    {
      type: "",
      name: "",
      smSize: 0,
      lgSize: 5,
    },
  ];

  return (
    <div className="container-two catering-page">
      <div className="catering-block">
        <ContainerTwo  />
      </div>
    </div>
  );
}
