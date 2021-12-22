import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/forms/Auth";

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
            <Route exact path="/*" element={<Navigate to="/auth" />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
