import React from 'react'

const Header = () => {
    return (
        <header id="header" className="header" data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
                    <img src="assets/img/logo.png" alt="" />
                    <h1>DevMeet<span>.</span></h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="nav-link"><a href="http://localhost:3000/"><span>Home</span></a></li>
                        <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
                        <li><a className="nav-link scrollto" href="index.html#featured-services">Our Services</a></li>
                        <li><a className="nav-link scrollto" href="index.html#team">Team</a></li>
                        <li className="dropdown"><a href="#"><span>Login/Signup</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                                <li><a href="/signin">Sign In</a></li>
                                <li><a href="/signup">Sign Up</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle d-none"></i>
                </nav>

                


            </div>
        </header>
    )
}

export default Header