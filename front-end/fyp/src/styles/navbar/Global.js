import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  background-color: rgba(36, 44, 92);
  height: 76px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
`;

export const NavBarIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.6rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;
