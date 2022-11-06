import Image1 from "../assets/img/portfolio/mehrzad/img_mehrzad_0.jpg";
import Image2 from "../assets/img/portfolio/mehrzad/img_mehrzad_1.jpg";
import Image3 from "../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";

const meterageUnit = { en: "Square Meters", fa: "مترمربع" };

const PortfolioData = [
  {
    id: 419,
    title: { fa: "ساختمان مهرزاد", en: "Mehrzad Building" },
    image: [Image1, Image2, Image3],
    tag: ["MehrzadBuilding"],
    delayAnimation: "0",
    details: [
      {
        project: { fa: "ساختمان مهرزاد", en: "Mehrzad Building" },
        address: "گیلان، تالش، خیابان تیلار",
        endDate: 1400,
        meterage: {
          value: 235,
          unit: meterageUnit
        }
      },
    ],
  },
  {
    id: 420,
    title: { fa: "دیگران", en: "Others" },
    image: [Image1, Image2, Image3],
    tag: ["OthersProject"],
    delayAnimation: "0",
    details: [
      {
        project: { fa: "دیگران", en: "Others" },
        address: "گیلان، تالش، خیابان تیلار",
        endDate: 1400,
        meterage: {
          value: 235,
          unit: meterageUnit
        }
      },
    ],
  },
];

export default PortfolioData;
