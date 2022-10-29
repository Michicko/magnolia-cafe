import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocialIcons = ({ theme }) => {
  return (
    <>
      <AiOutlineInstagram className={`header__icon ${theme}`} />
      <AiFillFacebook className={`header__icon ${theme}`} />
      <AiOutlineTwitter className={`header__icon ${theme}`} />
    </>
  );
};

export default SocialIcons;
