import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import {
  ProfileImgWrap,
  ProfilePicture,
  SideBar,
  SideBarIcon,
  SideBarNav,
  SidebarWrap,
  UserInfo,
  UsernameHeader,
} from "../../styles/sidebar/Global";
import profile from "../../img/profile.svg";

const Sidebar = ({ user }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log(user);
  }, []);

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
            <AiIcons.AiOutlineDoubleLeft onClick={showSidebar} />
          </SideBarIcon>
          <UserInfo>
            <ProfileImgWrap to="/dashboard/profile">
              <ProfilePicture src={profile} alt="Profile Picture" />
            </ProfileImgWrap>
            <UsernameHeader>{user.displayName}</UsernameHeader>
          </UserInfo>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} index={index} />;
          })}
        </SidebarWrap>
      </SideBarNav>
    </>
  );
};

export default Sidebar;
