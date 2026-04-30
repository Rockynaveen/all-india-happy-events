import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
=======


import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import "bootstrap/dist/js/bootstrap.bundle.min.js";
>>>>>>> cb3e55f (final commit)
=======
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ REQUIRED
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./pages/home-page";
import PreEventPhotographers from "./pages/pre-event-photographers";
<<<<<<< HEAD
import VendorDetailsPage from "./pages/vendors-details-page";
=======
>>>>>>> cb3e55f (final commit)
import BlogsPage from "./pages/blogs-page";
import BlogDetailsPage from "./pages/blog-details-page";
<<<<<<< HEAD
import Register from "./pages/register";
import Login from "./pages/login";
<<<<<<< HEAD

// ✅ Create QueryClient
=======
=======
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
import RealWeddingsPage from "./pages/real-weddings-page";
import RealWeddingDetailPage from "./pages/real-wedding-details-page";
import VendorsPage from "./pages/vendors-page";
import Header from "./components/header";
import Footer from "./components/footer";
<<<<<<< HEAD
>>>>>>> cb3e55f (final commit)
=======
import VendorDetailsPage from "./pages/vendor-details-page";
// import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
// import VerifyOtpPage from "./pages/verify-otp";
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pre-event-photographers" element={<PreEventPhotographers />} />
          <Route path="/vendors/:id" element={<VendorDetailsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
=======
      <Header/>
=======
        <Header />
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
        <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/verify-otp" element={<VerifyOtpPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}

          <Route path="/" element={<Homepage />} />
          <Route path="/pre-event-photographers" element={<PreEventPhotographers />} />

          <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/vendors/:slug" element={<VendorDetailsPage />} />

          <Route path="/real-weddings" element={<RealWeddingsPage />} />

          <Route
            path="/real-weddings/:slug"
            element={<RealWeddingDetailPage />}
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
        </Routes>
<<<<<<< HEAD
        <Footer/>
>>>>>>> cb3e55f (final commit)
=======
        <Footer />
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);