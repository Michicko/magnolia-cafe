import { GiCupcake, GiCoffeeCup } from "react-icons/gi";
import { FaCoffee, FaPizzaSlice } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const CategoryIcon = ({ name, current, i }) => {
  const icons = [
    {
      name: "breakfast and lunch",
      icon: (
        <FaPizzaSlice
          className={`menu__category-icon ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "hot coffee and tea",
      icon: (
        <GiCoffeeCup
          className={`menu__category-icon ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "other hot drinks",
      icon: (
        <FaCoffee
          className={`menu__category-icon ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "iced coffee and tea",
      icon: (
        <SiBuymeacoffee
          className={`menu__category-icon ${current === i ? "current" : ""}`}
        />
      ),
    },
    {
      name: "bakery",
      icon: (
        <GiCupcake
          className={`menu__category-icon ${current === i ? "current" : ""}`}
        />
      ),
    },
  ];

  const catIcon = icons.find((icn) => icn.name === name).icon;

  return catIcon;
};

export default CategoryIcon;
