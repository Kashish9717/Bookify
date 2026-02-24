// Logout.jsx
import React from "react";
import { useFirebase } from "../Context/FireBaseP"; // keep your path same

function Logout() {
  const { isLoggedIn, handleLogout } = useFirebase();

  // agar user login nahi hai to kuch show na kare
  if (!isLoggedIn) return null;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <h4 className="text-warning mb-3">Welcome User 👋</h4>
      <button className="btn btn-danger px-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
