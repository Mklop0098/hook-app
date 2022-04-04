import "./App.css";
import { Login } from "./signin-app/Login";
import { SignIn } from "./signin-app/SignIn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./signin-app/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signing/:id" element={<SignIn />}></Route>
          <Route path="/login/:id" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
