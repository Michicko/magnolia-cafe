import { AiOutlineHome, AiOutlineBarChart } from "react-icons/ai";
import { BiDish } from "react-icons/bi";
import { MdBackupTable, MdPendingActions } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { MdEventSeat } from "react-icons/md";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoFastFoodOutline,
} from "react-icons/io5";

const Icons = ({ name }) => {
  const icons = [
    {
      name: "orders",
      icon: <MdPendingActions className="controlpanel__sidebar-icon" />,
    },
    {
      name: "reservations",
      icon: <MdBackupTable className="controlpanel__sidebar-icon" />,
    },
    {
      name: "menuItems",
      icon: <BiDish className="controlpanel__sidebar-icon" />,
    },
    {
      name: "combos",
      icon: <IoFastFoodOutline className="controlpanel__sidebar-icon" />,
    },
    {
      name: "seats",
      icon: <MdEventSeat className="controlpanel__sidebar-icon" />,
    },
    {
      name: "customers",
      icon: <HiOutlineUsers className="controlpanel__sidebar-icon" />,
    },
    {
      name: "report",
      icon: <AiOutlineBarChart className="controlpanel__sidebar-icon" />,
    },
    {
      name: "settings",
      icon: <IoSettingsOutline className="controlpanel__sidebar-icon" />,
    },
    {
      name: "logout",
      icon: <IoLogOutOutline className="controlpanel__sidebar-icon" />,
    },
  ];

  const icon = icons.find((icon) => icon.name === name).icon;
  return icon;
};

export default Icons;
