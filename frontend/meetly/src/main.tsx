import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./pages/Dashboard.tsx";
import Availability from "./pages/Availability.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMeeting from "./pages/CreateMeeting/CreateMeeting.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Meetly">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
