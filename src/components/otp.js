import { auth, db } from "./firebase"; // Adjust the import path as necessary
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import the AuthContext hook

const OTPVerification = () => {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  const { setUser } = useAuth(); // Use the setUser function from AuthContext
  const navigate = useNavigate(); // Use the navigate function from react-router-dom

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    });
  };

  const checkUserExists = async (phoneNumber) => {
    try {
      const q = query(collection(db, 'Users'), where('phoneNumber', '==', phoneNumber));
      const querySnapshot = await getDocs(q);
      console.log('Query snapshot:', querySnapshot.docs); // Log the query snapshot
      return querySnapshot.docs.length > 0 ? querySnapshot.docs[0].data() : null; // Return user data if found, else null
    } catch (error) {
      console.error('Error checking user:', error);
      return null;
    }
  };

  const handleSend = async (event) => {
    event.preventDefault();
    const userData = await checkUserExists(phone);
    if (!userData) {
      alert("User with this phone number does not exist.");
      return;
    }

    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent successfully
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // Verify OTP
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully
          let user = result.user;
          console.log("User signed in successfully:", user);
          alert("User signed in successfully");
          // Update user state and redirect to profile
          setUser(user); // Update the user state in AuthContext
          navigate("/profile"); // Redirect to the profile page
        })
        .catch((error) => {
          // Error: User couldn't sign in (bad verification code)
          console.error("Error verifying OTP:", error);
          alert("Error verifying OTP: " + error.message);
        });
    }
  };

  return (
    <div className="app__container">
      <Card sx={{ width: "300px" }}>
        <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography sx={{ padding: "20px" }} variant="h5" component="div">
            {hasFilled ? "Enter the OTP" : "Enter your phone number"}
          </Typography>
          <form onSubmit={handleSend}>
            {!hasFilled && (
              <TextField
                sx={{ width: "240px" }}
                variant="outlined"
                autoComplete="off"
                label="Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            )}
            {hasFilled && (
              <TextField
                sx={{ width: "240px" }}
                variant="outlined"
                label="OTP"
                value={otp}
                onChange={(event) => verifyOtp(event)}
              />
            )}
            <Button type="submit" variant="contained" sx={{ width: "240px", marginTop: "20px" }}>
              {hasFilled ? "Verify OTP" : "Send Code"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <div id="recaptcha"></div>
    </div>
  );
};

export default OTPVerification;
