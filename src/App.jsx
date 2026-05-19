import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Donors from "./pages/donors";
import Requests from "./pages/request";
import Profile from "./pages/profile";
import NewRequest from "./pages/newRequest";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 448, margin: "0 auto", position: "relative", minHeight: "100vh" }}>
         <Navbar /> 
        <div style={{ paddingBottom: 80, paddingTop: 80 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/request" element={<Requests />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/newRequest" element={<NewRequest />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}