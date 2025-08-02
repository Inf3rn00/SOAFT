import "./App.css";
import LandingPage from "./pages/LandingPage";

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
