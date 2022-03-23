import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import {
  ProfileImgWrap,
  ProfilePicture,
  SideBarIcon,
  SideBarNav,
  SidebarWrap,
  AuthSignOutWrap,
  UserInfo,
  UsernameHeader,
  AuthSignOutIcon,
  AuthSignOutText,
} from "../../styles/sidebar/Global";
import profile from "../../img/profile.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { NavBar, NavBarIcon } from "../../styles/navbar/Global";

const Sidebar = ({ user, dataCollectionFunction }) => {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();
  const { signout } = useAuth();
  //eslint-disable-next-line
  const [error, setError] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  const handleSignOut = async () => {
    setError("");
    try {
      await signout();
      navigate("/auth/signin");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <NavBar>
        <NavBarIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavBarIcon>
      </NavBar>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap id="sidebar">
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
            return (
              <SubMenu
                item={item}
                key={index}
                index={index}
                dataCollectionFunction={dataCollectionFunction}
              />
            );
          })}
          <AuthSignOutWrap>
            <AuthSignOutIcon onClick={handleSignOut}>
              <AiIcons.AiOutlinePoweroff />
            </AuthSignOutIcon>
            <AuthSignOutText onClick={handleSignOut}>Sign-Out</AuthSignOutText>
          </AuthSignOutWrap>
        </SidebarWrap>
      </SideBarNav>
    </>
  );
};

export default Sidebar;
