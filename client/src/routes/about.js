import PageContainer from "../components/PageContainer";
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  return (
    <PageContainer>
      <section className="section section__about">
        <div className="container big">
          <div className="row">
            <div className="heading">
              <h2 className="secondary-heading">About Magnolia cafe</h2>
            </div>
            <div className="section__about-main">
              <div className="section__about-box img">
                <div className="about-img-box">
                  <img
                    src={require("../assets/images/about.jpg")}
                    alt="about magnolia"
                    className="about-img"
                  />
                </div>
              </div>
              <div className="section__about-box text">
                <div className="text-box">
                  <h3 className="section-heading">Our Cafe</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facere, quis! Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Inventore, nostrum?
                  </p>
                  <p className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Natus quis libero repudiandae nemo repellat, illum inventore
                    similique doloribus blanditiis alias! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ab ullam iure dolore
                    doloribus distinctio vero cupiditate est sunt corporis Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                    iure? natus.
                  </p>
                </div>
                <div className="text-box">
                  <h3 className="section-heading">Our Coffee</h3>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Facere, quis! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptas, repudiandae!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#gallery" className="section__about-btn section__socials-btn">
          <IoIosArrowDown className="section__socials-icon" />
        </a>
      </section>
      <section id="gallery" className="section section__gallery">
        <div className="container big">
          <div className="row">
            <div className="heading">
              <h3 className="section-heading">Our Cafe</h3>
            </div>
            <div className="section__gallery-main img-1">
              <img
                src={require("../assets/images/gallery-1.png")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/gallery-2.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/gallery-3.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/gallery-4.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/social-2.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/gallery-5.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
              <img
                src={require("../assets/images/gallery-6.jpg")}
                alt="gallery"
                className="section__gallery-img"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="section section__restaurant">
        <img
          src={require("../assets/images/restaurant.jpg")}
          alt="restaurant"
          className="section__restaurant-bg"
        />
      </div>
    </PageContainer>
  );
};

export default About;
