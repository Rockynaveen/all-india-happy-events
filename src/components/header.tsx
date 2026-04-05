import { IconArrowRight, IconMenu2, IconShoppingBag } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/aLl_happy_events_final.png';

const Header = () => {
  const navLinks = [
    {
      name: "Venues",
      link: "#"
    },
    {
      name: "Vendors",
      link: "#",
      megaMenu: [
        {
          title: "Photographers",
          links: [
            { label: "Photographers", path: "/vendors/photographers" },
            { label: "Videographers", path: "/vendors/videographers" }
          ]
        },
        {
          title: "Pre Event Shoot",
          links: [
            { label: "Pre Event Shoot Locations", path: "/pre-event-photographers" },
            { label: "Pre Event Photographers", path: "/pre-event-photographers" }
          ]
        },
        {
          title: "Makeup",
          links: [
            { label: "Bridal Makeup Artists", path: "#" },
            { label: "Family Makeup", path: "#" }
          ]
        },
        {
          title: "Planning & Decor",
          links: [
            { label: "Event Planners", path: "#" },
            { label: "Decorators", path: "#" }
          ]
        }
      ]
    },
    {
      name: "Real Weddings",
      link: "#"
    },
    {
      name: "Blog",
      link: "#",
      megaMenu: [
        {
          title: "South Indian Wedding", // MAIN section clickable
          mainLink: "/blogs", // link to BlogsPage
          links: [
            { label: "Bridal Makeup", path: "/blogs" },
            { label: "Honeymoon Travel", path: "/blogs" },
            { label: "Bridal Hairstyles", path: "/blogs" },
            { label: "Event Decor Ideas", path: "/blogs" }
          ]
        },
        {
          title: "Popular Sections",
          links: [
            { label: "Real Brides Reveal", path: "/blogs" },
            { label: "Bridal Buys", path: "/blogs" },
            { label: "Mehendi Ideas", path: "/blogs" }
          ]
        },
        {
          title: "Most Searched",
          links: [
            { label: "Best Bridal Entry Songs", path: "/blogs" },
            { label: "Bridal Mehendi Designs", path: "/blogs" },
            { label: "Wedding Hashtags", path: "/blogs" }
          ]
        }
      ]
    }
  ];

  return (
    <header className="fixed-top header-anim">
      <nav className="navbar navbar-expand-lg bdr-nav w-100 px-3">

        {/* LOGO */}
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="header_logo my-2" alt="logo" />
          </Link>
        </div>

        {/* NAV */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav nav-center">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item dropdown mega-parent">
                
                <a className="nav-link" href={item.link}>
                  {item.name}
                  {item.megaMenu && <i className="fa fa-chevron-down"></i>}
                </a>

                {/* DROPDOWN */}
                {item.megaMenu && (
                  <div className="mega-menu">
                    <div className="mega-grid">
                      {item.megaMenu.map((col, i) => (
                        <div className="mega-col" key={i}>
                          <h4>
                            {col.mainLink ? (
                              <Link to={col.mainLink}>{col.title}</Link>
                            ) : (
                              col.title
                            )}
                          </h4>

                          {col.links.map((link, j) => (
                            <Link key={j} to={link.path}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center ml-auto gx-2 loginsearch">
          <button className="navbar-toggler p-3">
            <IconMenu2 />
          </button>

          <div className="rr-header-right d-flex align-items-center">
            <div className="rr-header-icon-card d-none d-xl-block">
              <IconShoppingBag className="text-light" />
              <span>0</span>
            </div>

            <div className="rr-header-contat d-none d-md-block ml-35">
              <Link className="rr-btn" to="/login">
                <span>Login <IconArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;