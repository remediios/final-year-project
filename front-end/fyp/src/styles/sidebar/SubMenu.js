import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid white;
    transition: all 0.1s ease-in;
    cursor: pointer;
  }
`;

export const SidebarText = styled.span`
  margin-left: 16px;
  font-size: 18px;
`;

export const SidebarSubText = styled.span`
  margin-left: 16px;
  font-size: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid white;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;
