import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBar = styled.div`
  background-color: rgba(36, 44, 92);
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
`;

export const SideBarIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
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
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
