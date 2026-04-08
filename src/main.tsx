import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./pages/home-page";
import PreEventPhotographers from "./pages/pre-event-photographers";
import VendorDetailsPage from "./pages/vendors-details-page";
import BlogsPage from "./pages/blogs-page";
import BlogDetailsPage from "./pages/blog-details-page";
import Register from "./pages/register";
import Login from "./pages/login";

// ✅ Create QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pre-event-photographers" element={<PreEventPhotographers />} />
          <Route path="/vendors/:id" element={<VendorDetailsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);