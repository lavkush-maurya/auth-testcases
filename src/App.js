import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#7ec3c4", height: "100vh" }}
    >
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      <Button>
        <Link to={"/login"}>Login Page</Link>
      </Button>
    </div>
  );
}

export default App;
