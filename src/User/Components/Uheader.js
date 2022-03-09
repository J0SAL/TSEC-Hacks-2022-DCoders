import React from 'react'

const Uheader = () => {
  return (
    <header id="header" class="header" data-scrollto-offset="0">
            <div class="container-fluid d-flex align-items-center justify-content-between">

                <a href="/home" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
                    <img src="assets/img/logo.png" alt="" />
                    <h1>DevMeet<span>.</span></h1>
                </a>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li class="nav-link"><a href="http://localhost:3000/home"><span>Home</span></a></li>
                        <li><a class="nav-link scrollto" href="/home/projects">Projects</a></li>
                        <li><a class="nav-link scrollto" href="/userservices">Contribute Projects</a></li>
                        <li><a class="nav-link scrollto" href="/userteam">Connections</a></li>
                        <li><a class="nav-link scrollto" href="/usercontact">Logout</a></li>
                        <li><a class="nav-link scrollto" href="/userteam">Profile</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle d-none"></i>
                </nav>

                <a class="btn-getstarted scrollto" href="index.html#about">Get Started</a>

            </div>
        </header>
  )
}

export default Uheader