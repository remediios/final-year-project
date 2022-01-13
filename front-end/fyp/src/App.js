import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/authentication/Auth";
import PrivateRoute from "./components/routes/PrivateRoute";
import TypingSpeed from "./pages/TypingSpeed";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
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
        <Route
          exact
          path="/step1"
          element={
            <PrivateRoute>
              <TypingSpeed />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/dashboard/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/auth/*" element={<Auth />} />
        <Route exact path="/*" element={<Navigate to="/auth" />} />
      </Routes>
    </>
  );
}

export default App;
