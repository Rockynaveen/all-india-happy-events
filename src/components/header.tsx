import {
  IconArrowRight,
  IconMenu2,
  IconShoppingBag,
} from "@tabler/icons-react";

import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/auth-store";
import { useCartStore } from "../store/cart-store";

import logo from "../assets/images/aLl_happy_events_final.png";

const Header = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const cart = useCartStore((state) => state.cart); 

  const navLinks = [
    { name: "Vendors", link: "/vendors" },
    { name: "Real Weddings", link: "/real-weddings" },
    { name: "Blog", link: "/blogs" },
    { name: "FAQ", link: "/faqs" },
    { name: "Events", link: "/eventpackage" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed-top header-anim">
      <nav className="navbar navbar-expand-lg bdr-nav w-100 px-3">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="header_logo my-2"
            alt="logo"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav nav-center">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center ms-auto gx-2 loginsearch">
          {/* MOBILE MENU ICON */}
          <button className="navbar-toggler p-3" type="button">
            <IconMenu2 />
          </button>

          <div className="rr-header-right d-flex align-items-center">
            {/* 🛒 CART */}
            <Link
              to="/cart"
              className="rr-header-icon-card d-none d-xl-block position-relative"
            >
              <IconShoppingBag className="text-light" />

              {/* 🔥 Dynamic Count */}
              {cart.length > 0 && (
                <span className="cart-count">
                  {cart.length}
                </span>
              )}
            </Link>

            {user ? (
              <>
                {/* USER NAME */}
                <div className="rr-header-contat d-none d-md-block ms-3">
                  <span className="text-light">
                    {user.name}
                  </span>
                </div>

                {/* LOGOUT */}
                <div className="rr-header-contat d-none d-md-block ms-3">
                  <button
                    className="rr-btn border-0"
                    onClick={handleLogout}
                  >
                    <span>
                      Logout <IconArrowRight />
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* LOGIN */}
                <div className="rr-header-contat d-none d-md-block ms-3">
                  <Link className="rr-btn me-2" to="/login">
                    <span>
                      Login <IconArrowRight />
                    </span>
                  </Link>
                </div>

                {/* REGISTER */}
                <div className="rr-header-contat d-none d-md-block">
                  <Link
                    className="rr-btn register-btn"
                    to="/register"
                  >
                    <span>
                      Register <IconArrowRight />
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;