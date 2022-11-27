import PageContainer from "../components/PageContainer";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const restaurantRef = useRef(null);
  const [seen, setSeen] = useState(false);
  const [headingSeen, setHeadingSeen] = useState(false);
  const galleryHeadingRef = useRef(null);
  const pageRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const pageBox = pageRef.current;
    const slideHeadingIn = (e) => {
      const headingBox = galleryHeadingRef.current;
      const windowHeight = window.innerHeight;
      const headingBoxRect = headingBox.getBoundingClientRect();
      const galleryBox = galleryRef.current;
      const galleryImages = [
        ...galleryBox.querySelectorAll(".section__gallery-img"),
      ];
      if (
        windowHeight - Math.round(headingBoxRect.y + headingBoxRect.height) >=
          0 &&
        windowHeight - Math.round(headingBoxRect.y + headingBoxRect.height) <=
          headingBoxRect.height &&
        !headingSeen
      ) {
        setHeadingSeen(true);
      }

      galleryImages.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        if (
          windowHeight - Math.round(imgRect.y + imgRect.height) >= 0 &&
          windowHeight - Math.round(imgRect.y + imgRect.height) <=
            imgRect.height &&
          !img.classList.contains("seen")
        ) {
          img.classList.add("seen");
          // console.log(img);
        }
      });
    };

    // pageRef.current.addEventListener("click", slideHeadingIn);
    document.addEventListener("scroll", slideHeadingIn);

    return () => {
      document.addEventListener("scroll", slideHeadingIn);
    };
  });

  useEffect(() => {
    const restaurantContainer = restaurantRef.current;
    const zoomIn = () => {
      const restaurantRect = restaurantContainer.getBoundingClientRect();
      const top = restaurantRect.top;
      const height = restaurantRect.height;

      if (top <= Math.round(height) && !seen) {
        setSeen(true);
      } else if (top > height && seen) {
        setSeen(false);
      }
    };

    document.addEventListener("scroll", zoomIn);

    return () => {
      document.removeEventListener("scroll", zoomIn);
    };
  });

  return (
    <PageContainer>
      <div className="section__about-div" ref={pageRef}>
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
                      elit. Facere, quis! Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Inventore, nostrum?
                    </p>
                    <p className="text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Natus quis libero repudiandae nemo repellat, illum
                      inventore similique doloribus blanditiis alias! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Ab
                      ullam iure dolore doloribus distinctio vero cupiditate est
                      sunt corporis Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Neque, iure? natus.
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
        </section>
        <section id="gallery" className="section section__gallery">
          <div className="container big">
            <div className="row">
              <div
                className={`heading ${headingSeen && "seen"}`}
                ref={galleryHeadingRef}
              >
                <h3 className="section-heading section__gallery-heading">
                  gallery
                </h3>
              </div>
              <div className="section__gallery-main img-1" ref={galleryRef}>
                <img
                  src={require("../assets/images/gallery-1.png")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/gallery-2.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/gallery-3.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/gallery-4.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/social-2.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/gallery-5.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
                <img
                  src={require("../assets/images/gallery-6.jpg")}
                  alt="gallery"
                  className="section__gallery-img img"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="section section__restaurant" ref={restaurantRef}>
          <img
            src={require("../assets/images/restaurant.jpg")}
            alt="restaurant"
            className={
              seen ? "section__restaurant-bg seen" : "section__restaurant-bg"
            }
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
