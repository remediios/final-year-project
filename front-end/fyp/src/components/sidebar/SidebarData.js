import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Section2",
    path: "/dashboard/section2",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "SubSection1",
        path: "/dashboard/section2/1",
        icon: <IoIcons.IoIosPaper />,
        className: "sub-nav",
      },
      {
        title: "SubSection2",
        path: "/dashboard/section2/2",
        icon: <IoIcons.IoIosPaper />,
        className: "sub-nav",
      },
    ],
  },
  {
    title: "Section3",
    path: "/dashboard/section3",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <MdIcons.MdOutlineAccountCircle />,
    className: "nav-text",
  },
];
