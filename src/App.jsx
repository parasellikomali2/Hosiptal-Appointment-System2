import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Doctorprofile from "./pages/Doctorprofile";
import AppointmentPage from "./pages/AppointmentPage";
import ReceptionPage from "./pages/ReceptionPage";
import OperationTheatrePage from "./pages/OperationTheatrePage";
import PatientRoomsPage from "./pages/PatientRoomsPage";
import InnovationPage from "./pages/InnovationPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Register />} />
         <Route path="/Login" element={<Login />} />

        <Route path="/Home" element={<Home />} />
        <Route
  path="/About"
  element={<About />}
/>

        <Route
  path="/Doctorprofile"
  element={<Doctorprofile />}
/>
        <Route
          path="/AppointmentPage"
          element={<AppointmentPage />}
        />

        <Route
        path="/reception"
        element={<ReceptionPage />}
      />

      <Route
        path="/operation-theatre"
        element={<OperationTheatrePage />}
      />

      <Route
        path="/patient-rooms"
        element={<PatientRoomsPage />}
      />

        <Route
          path="/InnovationPage"
          element={<InnovationPage />}

        />

        <Route
          path="/ai-assistant"
          element={<AIAssistantPage />}
        />
      
       
        <Route path="/register" element={<Register />} />
      </Routes>
  
  );
}

export default App;