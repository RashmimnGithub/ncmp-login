import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User data not found");
        }
      } else {
        console.log("User not logged in");
        navigate("/login");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  async function handleLogout() {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      navigate("/login"); // Use navigate to redirect
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
              alt="User"
            />
          </div>
          <h3>{userDetails.firstName}, Welcome to NCMP</h3>
          <div>
            <p>First Name: {userDetails.firstName}</p>
            <p>Email: {userDetails.email}</p>
            <p>Phone Number: {userDetails.phoneNumber}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
