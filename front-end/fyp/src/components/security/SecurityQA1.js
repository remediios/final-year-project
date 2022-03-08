import React, { useEffect } from "react";
import {
  FormSecurityContainer,
  Question,
  SecurityInput,
} from "../../styles/security/Global";

const SecurityQA1 = (el) => {
  return (
    <>
      <Question>{el.el.name}</Question>
      <FormSecurityContainer id="securityqa">
        <SecurityInput type="text" placeholder="Answer" />
      </FormSecurityContainer>
    </>
  );
};

export default SecurityQA1;
