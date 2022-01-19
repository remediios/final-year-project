import styled from "styled-components";

export const ChartCointainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  padding: 40px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
    padding: 20px;
  }

  @media (min-width: 900px) {
    margin-left: 30px;
  }

  @media (min-width: 1920px) {
    margin-left: 80px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 22%;
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
