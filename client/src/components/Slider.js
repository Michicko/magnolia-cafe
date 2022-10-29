const Slider = ({ slides }) => {
  return (
    <div className="slider">
      <div className="slider__inner">
        <div className="slider__slides">
          {slides.map((slide) => {
            return (
              <div className="slider__slide" key={slide}>
                <img
                  src={require(`../assets/images/${slide}`)}
                  alt="slide"
                  className="slider__img"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
