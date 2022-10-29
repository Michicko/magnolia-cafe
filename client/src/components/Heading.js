const Heading = ({ heading, lead, headingTexts, align }) => {
  return (
    <div className="heading">
      <h2 className={`secondary-heading ${align}`}>{heading}</h2>
      <p className="lead">{lead}</p>
      {headingTexts &&
        headingTexts.map((txt) => {
          return (
            <p className="heading__text" key={txt}>
              {txt}
            </p>
          );
        })}
    </div>
  );
};

export default Heading;
