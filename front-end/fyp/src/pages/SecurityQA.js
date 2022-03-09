import React, { useEffect, useState } from "react";
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
  PrevButton,
} from "../styles/security/Global";
import { questions } from "../config/security/questions";
import SecurityQA1 from "../components/security/SecurityQA1";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useAuth } from "../contexts/AuthContext";
import { useDash } from "../contexts/DashContext";

const SecurityQA = () => {
  let navigate = useNavigate();
  const { currentUser } = useAuth();
  const [securityQA, setSecurityQA] = useState({});
  const [page, setPage] = useState(1);
  const { answer1, answer2, answer3, answer4 } = useDash();

  const handleSubmit = () => {
    setPage(2);
    if (page === 2) {
      console.log("CONTENT SUBMITED");
      //   navigate("/dashboard");
    }
  };

  const handlePrev = () => {
    setPage(1);
  };

  useEffect(() => {
    setSecurityQA({
      stringId: currentUser.uid,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
    });
  }, [answer1, answer2, answer3, answer4]);

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
          <div style={{ display: "flex" }}>
            {page === 2 ? (
              <PrevButton onClick={handlePrev}>
                <BiArrowBack />
              </PrevButton>
            ) : (
              ""
            )}
            {page === 1 ? (
              <SubmitButton type="submit" onClick={handleSubmit}>
                Next
              </SubmitButton>
            ) : (
              <SubmitButton
                style={{ marginLeft: "10px" }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </SubmitButton>
            )}
          </div>
        </BoxSecurityContainer>
      </MainContainer>
    </>
  );
};

export default SecurityQA;
