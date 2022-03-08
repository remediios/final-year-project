import React, { useRef, useState } from "react";
import { MainContainer } from "../styles/forms/Global";
import {
  BackSecurityDrop,
  BoxSecurityContainer,
  SmallText,
  TopSecurityContainer,
  HeaderContainer,
  FormBoxSecurityContainer,
  HeaderText,
  SubmitButton,
} from "../styles/security/Global";
import { questions } from "../config/security/questions";
import SecurityQA1 from "../components/security/SecurityQA1";
import { useNavigate } from "react-router-dom";

const SecurityQA = () => {
  const [page, setPage] = useState(1);
  let navigate = useNavigate();

  const handleSubmit = () => {
    setPage(2);
    if (page === 2) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <MainContainer>
        <BoxSecurityContainer>
          <TopSecurityContainer>
            <BackSecurityDrop />
            <HeaderContainer>
              <HeaderText>Security QA</HeaderText>
              <SmallText>Please answer all security questions!</SmallText>
            </HeaderContainer>
          </TopSecurityContainer>
          <div style={{ width: "75%" }}>
            <FormBoxSecurityContainer>
              {questions.map((el) => {
                if (page === 1 && el.index < 3) return <SecurityQA1 el={el} />;
                else if (page === 2 && el.index >= 3) {
                  return <SecurityQA1 el={el} />;
                }
              })}
            </FormBoxSecurityContainer>
          </div>
          <SubmitButton type="submit" onClick={handleSubmit}>
            {page === 1 ? "Next" : "Submit"}
          </SubmitButton>
        </BoxSecurityContainer>
      </MainContainer>
    </>
  );
};

export default SecurityQA;
