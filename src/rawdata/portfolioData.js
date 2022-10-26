import Image1 from "../assets/img/portfolio/mehrzad/img_mehrzad_0.jpg";
import Image2 from "../assets/img/portfolio/mehrzad/img_mehrzad_1.jpg";
import Image3 from "../assets/img/portfolio/mehrzad/img_mehrzad_2.jpg";

const PortfolioData = [
  {
    id: 419,
    type: "ساختمان مهرزاد",
    image: [Image1, Image2, Image3],
    tag: ["ProjectMehrzad"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "ساختمان مهرزاد",
        address: "گیلان، تالش، خیابان تیلار",
        status: "پایان یافته"
      },
    ],
  },
  {
    id: 2,
    type: "دیگران",
    image: [Image1, Image2, Image3],
    tag: ["OthersProject"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "دیگران",
        address: "گیلان، تالش، خیابان تیلار",
        status: "پایان یافته"

      },
    ],
  },
];

export default PortfolioData;
