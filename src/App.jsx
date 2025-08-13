import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  return (

    <Router>
      <Routes>
        <Route>
          <Route path="/" element = {<LandingPage />}/>
          <Route path="/login" element = {<Login />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
