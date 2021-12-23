import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/forms/Auth";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/routes/PrivateRoute";

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
      <AuthProvider>
        <AppContainer>
          <Routes>
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/auth/*" element={<Auth />} />
            <Route exact path="/*" element={<Navigate to="/auth" />} />
          </Routes>
        </AppContainer>
      </AuthProvider>
    </>
  );
}

export default App;
