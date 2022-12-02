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
      icon: <MdPendingActions className="control-panel__sidebar-icon" />,
    },
    {
      name: "reservations",
      icon: <MdBackupTable className="control-panel__sidebar-icon" />,
    },
    {
      name: "menuitems",
      icon: <BiDish className="control-panel__sidebar-icon" />,
    },
    {
      name: "combos",
      icon: <IoFastFoodOutline className="control-panel__sidebar-icon" />,
    },
    {
      name: "seats",
      icon: <MdEventSeat className="control-panel__sidebar-icon" />,
    },
    {
      name: "customers",
      icon: <HiOutlineUsers className="control-panel__sidebar-icon" />,
    },
    {
      name: "report",
      icon: <AiOutlineBarChart className="control-panel__sidebar-icon" />,
    },
    {
      name: "settings",
      icon: <IoSettingsOutline className="control-panel__sidebar-icon" />,
    },
    {
      name: "logout",
      icon: <IoLogOutOutline className="control-panel__sidebar-icon" />,
    },
  ];

  const icon = icons.find((icon) => icon.name === name).icon;
  return icon;
};

export default Icons;
