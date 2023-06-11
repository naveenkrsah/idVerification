import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Aadhar from "./pages/Aadhar";
import Pan from "./pages/Pan";
import DrvLic from "./pages/DrivingLicense";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/pan" element={<Pan />} />
        <Route path="/drivingLicense" element={<DrvLic />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
