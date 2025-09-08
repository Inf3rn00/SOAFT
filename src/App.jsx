import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdvancedResultStats from "./pages/ResultPages/AdvancedResultStats.jsx";
import ResultLayout from "./pages/ResultPages/ResultLayout.jsx";
import Result from "./pages/ResultPages/Result.jsx";


function App() {
  return (
    <div className="font-Monteserrat">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />}>
           <Route path="result" element={<ResultLayout />}>
            <Route index element={<Result />} />{" "}
            {/* Shows when /result is accessed */}
            <Route path="advancedStat/:id" element={<AdvancedResultStats />} />
          </Route>
          
          </Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
