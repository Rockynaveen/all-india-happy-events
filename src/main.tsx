import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/home-page";
import PreEventPhotographers from "./pages/pre-event-photographers";
import VendorDetailsPage from "./pages/vendors-details-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/pre-event-photographers"
          element={<PreEventPhotographers />}
        />

        {/* Details Page */}
        <Route path="/vendors/:id" element={<VendorDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);