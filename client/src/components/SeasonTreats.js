import Section from "./Section";

const SeasonTreats = () => {
  const products = [
    {
      name: "Gingerbread cappuccino with mashmallow",
      image: "winter-1.png",
      price: 4.5,
    },
    {
      name: "Gingerbread cookies",
      image: "winter-2.jpg",
      price: 4,
    },
    {
      name: "Peppermint hot chocolatewith mashmallow",
      image: "winter-3.png",
      price: 5,
    },
  ];

  return (
    <Section
      type="treats"
      heading="Hot winter treats"
      lead="Limited time only - Available until 26th feb 2023"
      products={products}
    />
  );
};

export default SeasonTreats;
