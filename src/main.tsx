import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
=======

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
>>>>>>> cb3e55f (final commit)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./pages/home-page";
import PreEventPhotographers from "./pages/pre-event-photographers";
<<<<<<< HEAD
import VendorDetailsPage from "./pages/vendors-details-page";
=======
>>>>>>> cb3e55f (final commit)
import BlogsPage from "./pages/blogs-page";
import BlogDetailsPage from "./pages/blog-details-page";
import Register from "./pages/register";
import Login from "./pages/login";
<<<<<<< HEAD

// ✅ Create QueryClient
=======
import RealWeddingsPage from "./pages/real-weddings-page";
import RealWeddingDetailPage from "./pages/real-wedding-details-page";
import VendorsPage from "./pages/vendors-page";
import VendorDetailsPage from "./pages/vendor-details-page";
import FaqPage from "./pages/faqs-page";
import Header from "./components/header";
import Footer from "./components/footer";
>>>>>>> cb3e55f (final commit)
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/pre-event-photographers" element={<PreEventPhotographers />} />

          <Route path="/vendors" element={<VendorsPage />} />
                  <Route path="/vendors/:slug" element={<VendorDetailsPage />} />



          <Route path="/real-weddings" element={<RealWeddingsPage />} />
          <Route path="/faq" element={<FaqPage />} />

          <Route
            path="/real-weddings/:slug"
            element={<RealWeddingDetailPage />}
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer/>
>>>>>>> cb3e55f (final commit)
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);