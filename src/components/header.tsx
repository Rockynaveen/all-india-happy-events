import { IconArrowRight, IconMenu2, IconShoppingBag } from '@tabler/icons-react'
import logo from '../assets/images/aLl_happy_events_final.png'

const Header = () => {
    const navLinks = [
        { name: 'Venues', link: '#' },
        { name: 'Vendors', link: '#' },
        { name: 'Real Weddings', link: '#' },
        { name: 'Blog', link: '#' },
    ]

    return (
        <header className="fixed-top header-anim">
            <nav className="navbar navbar-expand-lg bdr-nav w-100 px-3">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} className="header_logo my-2" alt="" />
                    </a>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse" data-hover="dropdown"
                    data-animations="slideInUp slideInUp slideInUp slideInUp">
                    <ul className="navbar-nav nav-center">
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className="nav-item dropdown mega-parent">
                                    <a className="nav-link dropdown-toggle-mob" href={link.link} data-toggle="dropdown">
                                        {link.name} <i className="fa fa-chevron-down"></i>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="d-flex align-items-center ml-auto gx-2 loginsearch">

                    <button className="navbar-toggler x collapsed p-3" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse">
                        <IconMenu2 />
                    </button>

                    <div className="rr-header-right d-flex align-items-center justify-content-end p-relative mr-30">
                        <div className="rr-header-icon-card d-none d-xl-block p-relative">
                            <IconShoppingBag className='text-light' />
                            <span>0</span>
                        </div>

                        <div className="rr-header-contat d-none d-md-block ml-35">
                            <a className="rr-btn" href="#" role="button" data-toggle="modal"
                                data-target="#login_form"><span>Login<IconArrowRight /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
