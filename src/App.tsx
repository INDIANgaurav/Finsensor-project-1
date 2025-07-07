import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import ApplyLeave from "./pages/ApplyLeave";
import MyLeaves from "./pages/MyLeaves";
import MyApprovals from "./pages/MyApprovals";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen  ">
      <Navbar />

      <div className="flex flex-1 ">
        <Sidebar />

        <div className="flex-1 bg-gray-100 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apply" element={<ApplyLeave />} />
            <Route path="/my-leave" element={<MyLeaves />} />
            <Route path="/my-approvals" element={<MyApprovals />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
