import { AiOutlineHome, AiOutlineBarChart } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { MdBackupTable } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import { VscSave } from "react-icons/vsc";

const Icons = ({ name }) => {
  const icons = [
    {
      name: "dashboard",
      icon: <AiOutlineHome className="cp-root__sidebar-icon" />,
    },
    {
      name: "orders",
      icon: <VscSave className="cp-root__sidebar-icon" />,
    },
    {
      name: "reservations",
      icon: <MdBackupTable className="cp-root__sidebar-icon" />,
    },
    {
      name: "menuItems",
      icon: <BiDish className="cp-root__sidebar-icon" />,
    },
    {
      name: "combos",
      icon: <IoFastFoodOutline className="cp-root__sidebar-icon" />,
    },
    {
      name: "customers",
      icon: <HiOutlineUsers className="cp-root__sidebar-icon" />,
    },
    {
      name: "report",
      icon: <AiOutlineBarChart className="cp-root__sidebar-icon" />,
    },
    {
      name: "settings",
      icon: <IoSettingsOutline className="cp-root__sidebar-icon" />,
    },
    {
      name: "logout",
      icon: <IoLogOutOutline className="cp-root__sidebar-icon" />,
    },
  ];

  const icon = icons.find((icon) => icon.name === name).icon;
  return icon;
};

export default Icons;
