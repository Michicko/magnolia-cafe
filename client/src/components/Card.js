const Card = ({ product, i }) => {
  const { name, price, image } = product;
  return (
    <div className={i > -1 ? `card card-${i + 1}` : "card"} key={price}>
      <div className="card__img-box">
        <img
          src={require(`../assets/images/${image}`)}
          alt={name}
          className="card__img"
        />
      </div>
      <div className="card__body">
        <h4 className="card__name">{name}</h4>
        <p className="card__text">${price}</p>
      </div>
    </div>
  );
};

export default Card;
