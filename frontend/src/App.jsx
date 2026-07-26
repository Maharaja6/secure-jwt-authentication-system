import { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {

  const [showRegister, setShowRegister] = useState(false);

  const token = localStorage.getItem("token");

  if (token) {
    return (
      <>
        <Navbar />
        <Dashboard />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {showRegister ? (
        <Register
          goToLogin={() => setShowRegister(false)}
        />
      ) : (
        <Login
          goToRegister={() => setShowRegister(true)}
        />
      )}
    </>
  );
}

export default App;