import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import DefaultLandingPage from "./DefaultLandingPage";
import Employees from "./Employees";
import Clients from "./Clients";
import Projects from "./Projects";
import BilllingPayments from "./BilllingPayments";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLandingPage />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/BilllingPayments" element={<BilllingPayments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
