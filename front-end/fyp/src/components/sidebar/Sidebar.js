import React, { useState } from "react";
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
  AuthSignOutWrap,
  UserInfo,
  UsernameHeader,
  AuthSignOutIcon,
  AuthSignOutText,
} from "../../styles/sidebar/Global";
import profile from "../../img/profile.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = ({ user }) => {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();
  const { signout } = useAuth();
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
      <SideBar>
        <SideBarIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </SideBarIcon>
      </SideBar>
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
            return <SubMenu item={item} key={index} index={index} />;
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
