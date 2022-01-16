import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./components/authentication/Auth";
import PrivateRoute from "./components/routes/PrivateRoute";
import TypingSpeed from "./pages/TypingSpeed";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import IdleTimer from "./classes/IdleTimer";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { currentUser, signout } = useAuth();
  const [isTimeout, setIsTimeout] = useState(false);

  function refreshPage() {}

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 600,
      onTimeout: async () => {
        setIsTimeout(true);
        await signout();
        window.location.reload(false);
      },
      onExpired: () => {
        setIsTimeout(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return (
    <>
      <div>{isTimeout ? "Timeout" : "Active"}</div>
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
