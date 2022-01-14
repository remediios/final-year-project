import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBar = styled.div`
  background-color: rgba(36, 44, 92);
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const SideBarIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.6rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

export const SideBarNav = styled.nav`
  background: rgba(36, 44, 92);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 400ms;
  z-index: 10;
  box-shadow: 4px 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const UserInfo = styled.div`
  height: 180px;
  padding: 20px 20px 20px 20px;
  text-align: center;
`;

export const ProfileImgWrap = styled(Link)``;

export const ProfilePicture = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const UsernameHeader = styled.h3`
  margin: 0 auto;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  padding-top: 2px;
`;
