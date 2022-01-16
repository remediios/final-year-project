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
  const { signout } = useAuth();
  //eslint-disable-next-line
  const [isTimeout, setIsTimeout] = useState(false);
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 10,
      onTimeout: async () => {
        setIsTimeout(true);
        await signout();
        setTimeOut(!timeOut);
      },
      onExpired: () => {
        setIsTimeout(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
    //eslint-disable-next-line
  }, [timeOut]);

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
