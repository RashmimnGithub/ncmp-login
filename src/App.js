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
import LandingPage from "./components/LandingPage";
import { AuthProvider, useAuth } from './components/AuthContext'; // Ensure useAuth is removed
import LandingPage1 from "./components/NOC";
import LandingPage2 from "./components/SOC";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

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
        
              <Routes>
                <Route path="/" element={user ? <Navigate to="/landing" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/forgot" element={<ForgotPassword />} />
                <Route path="/otp" element={<OTPVerification />} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/landing" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
                <Route path="/landing1" element={<PrivateRoute><LandingPage1 /></PrivateRoute>} />
                <Route path="/landing2" element={<PrivateRoute><LandingPage2 /></PrivateRoute>} />
              </Routes>
              <ToastContainer />
            
      </Router>
    </AuthProvider>
  );
}

export default App;
