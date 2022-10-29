import { GiCupcake, GiCoffeeCup } from "react-icons/gi";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const CategoryIcon = ({ name, current, i }) => {
  const icons = [
    {
      name: "breakfast and lunch",
      icon: (
        <FaPizzaSlice
          className={`icon light ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "hot coffee and tea",
      icon: (
        <GiCoffeeCup
          className={`icon light ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "other hot drinks",
      icon: (
        <FaCoffee className={`icon light ${current === i ? "current" : ""}`} />
      ),
    },
    {
      name: "iced coffee and tea",
      icon: (
        <SiBuymeacoffee
          className={`icon light ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "bakery",
      icon: (
        <GiCupcake className={`icon light ${current === i ? "current" : ""}`} />
      ),
    },
  ];

  const catIcon = icons.find((icn) => icn.name === name).icon;

  return catIcon;
};

export default CategoryIcon;
