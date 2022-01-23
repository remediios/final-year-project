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

  /**
   * For future improvements purposes, the sidebar is capable of
   * containing sub-menus, this feature is well-implemented and
   * only needs to be added as the following example demonstrates
   */

  // {
  //   index: 2,
  //   title: "Section2",
  //   path: "#",
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //   subNav: [
  //     {
  //       title: "Sub Section 1",
  //       path: "/dashboard",
  //       icon: <IoIcons.IoIosPaper />,
  //       className: "sub-nav",
  //     },
  //     {
  //       title: "Sub Section 2",
  //       path: "/dashboard",
  //       icon: <IoIcons.IoIosPaper />,
  //       className: "sub-nav",
  //     },
  //   ],
  // },
  // {
  //   index: 3,
  //   title: "Section3",
  //   path: "/dashboard",
  //   icon: <IoIcons.IoIosPaper />,
  // },
  {
    index: 4,
    title: "Profile",
    path: "/dashboard/profile",
    icon: <MdIcons.MdAccountCircle />,
  },
];
