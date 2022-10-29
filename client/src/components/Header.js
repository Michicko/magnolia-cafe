import { ImDiamonds } from "react-icons/im";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bg"></div>
      <div className="header__logo-box">
        <div className="header__logo-content">
          <ImDiamonds className="header__icon light" />
          <h1 className="header__heading">Magnolia</h1>
          <ImDiamonds className="header__icon light" />
        </div>
      </div>
      <div className="header__socials">
        <SocialIcons theme="light" />
      </div>
    </header>
  );
};

export default Header;
