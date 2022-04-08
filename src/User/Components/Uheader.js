import React from 'react'

const Uheader = () => {
  return (
    <header id="header" className="header" data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">

                <a href="/home" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
                    <img src="assets/img/logo.png" alt="" />
                    <h1>DevMeet<span>.</span></h1>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="nav-link"><a href="http://localhost:3000/home"><span>Home</span></a></li>
                        <li><a className="nav-link scrollto" href="/projects">Projects</a></li>
                        <li><a className="nav-link scrollto" href="/contribute">Contribute Projects</a></li>
                        <li><a className="nav-link scrollto" href="/connections">Connections</a></li>
                        <li><a className="nav-link scrollto" href="/">Logout</a></li>
                        <li><a className="nav-link scrollto" href="/profile">Profile</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle d-none"></i>
                </nav>

                <a className="btn-getstarted scrollto" href="/mycontribution">My Contribution</a>

            </div>
        </header>
  )
}

export default Uheader