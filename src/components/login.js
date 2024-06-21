import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { auth } from "./firebase";

function Login() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      setUser(auth.currentUser); // Set user in AuthContext
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <p className="forgot-password text-right">
        login with mobile <a href="/otp">Send OTP</a>
      </p>
      <SignInwithGoogle />
      <p className="forgot-password">
        No Account? <a href="/register">Register</a>
      </p>
    </form>
  );
}

export default Login;
