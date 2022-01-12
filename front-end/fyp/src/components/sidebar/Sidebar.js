import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import {
  SideBar,
  SideBarIcon,
  SideBarNav,
  SidebarWrap,
} from "../../styles/sidebar/Global";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <SideBar>
        <SideBarIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </SideBarIcon>
      </SideBar>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <SideBarIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </SideBarIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} index={index} />;
          })}
        </SidebarWrap>
      </SideBarNav>
    </>
  );
};

export default Sidebar;
