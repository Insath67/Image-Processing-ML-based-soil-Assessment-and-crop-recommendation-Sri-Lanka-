import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewAnalysis from "./pages/NewAnalysis";
import AnalysisResult from "./pages/AnalysisResult";
import History from "./pages/History";
import DeviceStatus from "./pages/DeviceStatus";

import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Sidebar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/analysis"
            element={<NewAnalysis />}
          />

          <Route
            path="/result/:id"
            element={<AnalysisResult />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/device"
            element={<DeviceStatus />}
          />

        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;