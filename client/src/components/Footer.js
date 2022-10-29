import { useEffect, useRef, useState } from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    setBottom(false);
  }, []);

  const debounce = (fn, delay) => {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  };

  useEffect(() => {
    const setFixed = () => {
      if (
        document.documentElement.scrollHeight ===
        window.pageYOffset + window.innerHeight
      ) {
        if (!bottom) {
          setBottom(true);
        }
      } else {
        if (bottom) {
          setBottom(false);
        }
      }
    };
    document.addEventListener("scroll", debounce(setFixed, 50));

    return () => {
      document.removeEventListener("scroll", debounce(setFixed, 50));
    };
  });

  return (
    <footer className={bottom ? "footer fixd" : "footer"}>
      <div className="footer__content">
        <div className="footer__opening">
          <h3 className="footer__heading">Opening hours</h3>
          <div className="footer__body">
            <div>
              <p>Monday - Tuesday</p>
              <p>7am - 9pm</p>
            </div>
            <div>
              <p>Friday - Sunday</p>
              <p>9am - 11pm</p>
            </div>
          </div>
        </div>
        <div className="footer__contact">
          <div>
            <h3 className="footer__heading">Contact info</h3>
            <div className="footer__contact-details">
              <p>(123)456 7890</p>
              <p>791 Lexington Ave</p>
              <p>New York, NY 10065</p>
              <p>contact@magnolia.com</p>
            </div>
          </div>
          <div>
            <SocialIcons theme="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
