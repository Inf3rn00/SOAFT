import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import Login from "./pages/Login";

function App() {
  return (
    <div className="font-Monteserrat">
      <Router>
        <Routes>
          <Route>
            <Route path="/" element = {<LandingPage />}/>
            <Route path="/login" element = {<Login />} />
            <Route path="/admin/*" element = {<Admin />} />
          </Route>
        </Routes>
      </Router>
    </div>
    

  );
}

export default App;
