import Card from "./Card";
import Heading from "./Heading";

const Section = ({ type, heading, lead, headingTexts, products }) => {
  return (
    <section className={`section section__${type}`}>
      <div className="container small">
        <div className="row">
          <Heading heading={heading} lead={lead} headingTexts={headingTexts} />
          <div className="col">
            {products.map((product, i) => {
              return <Card product={product} i={i} key={product.price} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
