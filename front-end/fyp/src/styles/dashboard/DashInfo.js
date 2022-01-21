import styled from "styled-components";

export const InfoCointainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

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

export const CryptoTitle = styled.h1`
  font-weight: 600;
  margin: 0 auto;
`;

export const CryptoDescription = styled.p`
  width: 75%;
  text-align: center;
`;

export const CryptoDataWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

export const CryptoDataSpan = styled.span`
  display: flex;
  justify-content: center;
`;

export const CryptoHeading = styled.h3`
  width: 10%;
  font-weight: 600;
  margin: 0;

  @media (min-width: 1920px) {
    width: 10%;
  }

  @media (max-width: 1919px) {
    width: 15%;
  }

  @media (max-width: 1260px) {
    width: 25%;
  }

  @media (max-width: 700px) {
    width: 30%;
  }
`;

export const CryptoData = styled.h3`
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const CryptoLogo = styled.img`
  margin: 0;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 10%;
  border: 1px solid rgba(36, 44, 92);
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(36, 44, 92);
  color: white;
  &:hover {
    background-color: rgba(55, 68, 148);
    transition: 0.2s all ease-in-out;
    cursor: pointer;
  }
`;
