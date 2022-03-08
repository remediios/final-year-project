import styled from "styled-components";

export const BoxSecurityContainer = styled.div`
  width: 360px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopSecurityContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackSecurityDrop = styled.div`
  width: 140%;
  height: 400px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 10%;
  transform: rotate(90deg);
  top: -310px;
  left: -70px;
  background: rgb(36, 44, 92);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(39, 60, 117, 1) 40%,
    rgb(36, 44, 92) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  margin-bottom: 1.2rem;
`;

export const FormBoxSecurityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
  margin-left: 30px;
`;

export const FormSecurityContainer = styled.form`
  width: 50%;
  display: flex;
  align-items: left;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const SecurityInput = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(36, 44, 92);
  }
`;

export const Question = styled.p`
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(36, 44, 92);
  margin-top: 40px;
  margin-left: 30px;

  &:hover {
    background-color: rgb(61, 74, 153);
  }
`;
