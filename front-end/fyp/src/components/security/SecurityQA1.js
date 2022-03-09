import React, { useState } from "react";
import { useDash } from "../../contexts/DashContext";
import {
  FormSecurityContainer,
  Question,
  SecurityInput,
} from "../../styles/security/Global";

const SecurityQA1 = (el) => {
  const [error, setError] = useState("");
  const { setAnswer1, setAnswer2, setAnswer3, setAnswer4 } = useDash();

  const handleAnswer = (e) => {
    switch (el.el.index) {
      case 1:
        setAnswer1(e.target.value);
        break;
      case 2:
        setAnswer2(e.target.value);
        break;
      case 3:
        setAnswer3(e.target.value);
        break;
      case 4:
        setAnswer4(e.target.value);
        break;
      default:
        setError("Error occured!");
    }
  };

  return (
    <>
      <Question>{el.el.name}</Question>
      <FormSecurityContainer id="securityqa">
        <SecurityInput
          type="text"
          placeholder="Answer"
          onChange={handleAnswer}
        />
      </FormSecurityContainer>
    </>
  );
};

export default SecurityQA1;
