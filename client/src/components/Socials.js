import { AiOutlineInstagram } from "react-icons/ai";
import Slider from "./Slider";
import { IoIosArrowUp } from "react-icons/io";

const Socials = () => {
  const slides = [
    "social-1.jpg",
    "social-2.jpg",
    "social-3.jpg",
    "social-4.jpg",
    "social-5.jpg",
  ];
  return (
    <section className="section section__socials">
      <div className="section__socials-slider">
        <Slider slides={slides} />
      </div>
      <button className="btn">
        <AiOutlineInstagram className="btn__icon right" />
        Follow us on instagram
      </button>
      <img
        src={require("../assets/images/3.png")}
        alt="coffee bean"
        className="section__socials-img"
      />
      {/* <button className="section__socials-btn">
        <IoIosArrowUp className="section__socials-icon" />
      </button> */}
    </section>
  );
};

export default Socials;
