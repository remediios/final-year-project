import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    index: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    index: 2,
    title: "Profile",
    path: "/dashboard/profile",
    icon: <MdIcons.MdAccountCircle />,
  },
  {
    index: 3,
    title: "Admin Access",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        index: 31,
        title: "Data Collection Mode",
        path: "#",
        icon: <IoIcons.IoIosPaper />,
        className: "sub-nav",
      },
    ],
  },
];
