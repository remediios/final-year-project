import styled from "styled-components";

export const Button = styled.button`
  width: 20%;
  border: 1px solid rgba(36, 44, 92);
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "rgba(36, 44, 92)" : "white"};
  color: ${({ selected }) => (selected ? "white" : "")};
  font-weight: ${({ selected }) => (selected ? 700 : 500)};
  &:hover {
    background-color: rgba(36, 44, 92);
    color: white;
    transition: 0.2s all ease-in-out;
  }
`;
