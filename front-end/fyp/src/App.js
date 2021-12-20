import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/forms/LogIn";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route exact path="/auth/signin" element={<LogIn />} />
            <Route exact path="/auth/signup" element={<LogIn />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
