import styled from "styled-components";
import Container from "@mui/material/Container";

export const UserInfoContainer = styled.div`
  padding: 10px;
  margin-top: 150px;
  margin-left: 20px;
  float: left;
  width: 40%;
`;

export const HelloHeader = styled.h1`
  margin: 0;
  height: 100px;
  font-size: 5rem;

  justify-content: start;
`;

export const UsernameHeader = styled.h1`
  margin: 0;
  font-size: 2.2rem;

  justify-content: start;
`;

export const DescriptionHeader = styled.p`
  margin: 0;

  justify-content: start;
  font-size: 18px;
  margin-top: 20px;
  text-align: start;
  margin-bottom: 30px;
`;

export const MainContainer = styled(Container)`
  height: 75%;

  align-items: center;
`;

export const Div = styled.div`
  float: left;
  width: 50%;
`;

export const Button = styled.button`
  background-color: #242c5c;
  color: white;
  height: 50px;
  width: 120px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  &:hover {
    background-color: #3a4cb0;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ProfileArt = styled.img`
  margin-top: 140px;
  width: 500px;
  margin-left: 10px;
`;
