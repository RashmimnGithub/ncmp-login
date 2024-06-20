import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import OTPVerification from "./components/otp";
import Profile from "./components/profile";
import { AuthProvider } from './components/AuthContext'; // Ensure useAuth is removed

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider value={{ user, setUser }}> {/* Provide user and setUser */}
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route
                  path="/"
                  element={user ? <Navigate to="/profile" /> : <Navigate to="/login" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route
                  path="/profile"
                  element={user ? <Profile /> : <Navigate to="/login" />}
                  // element={<Profile />}
                />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/otp" element={<OTPVerification />} />
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
