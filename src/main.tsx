import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./pages/home-page";
import BlogsPage from "./pages/blogs-page";
import BlogDetailsPage from "./pages/blog-details-page";

import RealWeddingsPage from "./pages/real-weddings-page";
import RealWeddingDetailPage from "./pages/real-wedding-details-page";
import VendorsPage from "./pages/vendors-page";
import Header from "./components/header";
import Footer from "./components/footer";

import VendorDetailsPage from "./pages/vendor-details-page";
import FaqSection from "./pages/faq-page";
import EventPackagePage from "./pages/event-package-page";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import VerifyOtpPage from "./pages/verify-otp";
import CartPage from "./pages/cart-page";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* ✅ HOME */}
          <Route path="/" element={<Homepage />} />

          {/* ✅ AUTH ROUTES */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ✅ OTHER ROUTES */}
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/vendors/:slug" element={<VendorDetailsPage />} />

          <Route path="/real-weddings" element={<RealWeddingsPage />} />
          <Route path="/real-weddings/:slug" element={<RealWeddingDetailPage />} />

          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />

          <Route path="/faqs" element={<FaqSection />} />
          <Route path="/eventpackage" element={<EventPackagePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);