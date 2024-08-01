import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import companyLogo from "../yqgzPwOk.jpg"; // Update the path to your logo
// import userIcon from "../R.png"; // Update the path to your user icon
import "./login.css";

function Login() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      setUser(auth.currentUser); // Set user in AuthContext
      // toast.success("User logged in Successfully", {
      //   position: "top-center",
      // });
      navigate("/landing");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="login-page-container">
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <h1 className="company-name">Netcon</h1>
        <div className="user-section">
          {/* <img src={userIcon} alt="User Icon" className="user-icon" /> */}
        </div>
      </div>
      <div className="auth-wrapper">
        {/* <h1>Welcome to Netcon CMP</h1> */}
        <div className="auth-inner">
          <h3>Login</h3>
          <div className="container">
            <form onSubmit={handleSubmit}>
              {/* <h3>Login</h3> */}
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                Forgot password <a href="/forgot">Send reset link</a>
              </p>
              {/* <p className="forgot-password text-right">
                login with mobile <a href="/otp">Send OTP</a>
              </p> */}
              <SignInwithGoogle />
              <p className="forgot-password">
                No Account? <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
