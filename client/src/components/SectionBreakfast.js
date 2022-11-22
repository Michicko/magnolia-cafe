import Section from "./Section";

const SectionBreakfast = () => {
  const products = [
    {
      name: "chocolate croissant and almond latte macchiato",
      image: "breakfast-1.jpg",
      price: 7,
    },
    {
      name: "vegetable bagel and cappuccino",
      image: "breakfast-2.jpg",
      price: 11,
    },
    {
      name: "Avocado toast with egg & latte",
      image: "breakfast-3.jpg",
      price: 12.5,
    },
  ];

  const headingTexts = [
    "Start your day right",
    "Buy your breakfast untill 11 am",
  ];
  return (
    <Section
      type="breakfast"
      heading="Breakfast sets"
      headingTexts={headingTexts}
      products={products}
    />
  );
};

export default SectionBreakfast;
