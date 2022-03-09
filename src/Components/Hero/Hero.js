import React from 'react'

const Hero = () => {
    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                <img src="assets/img/devmeet.jpg" className="img-fluid animated" />
                <h2>Welcome to <span>DevMeet</span></h2>
                <p>Meet Developers with Common Intrests </p>
                <div className="d-flex">
                    <a href="#about" className="btn-get-started scrollto">Lets Get Started</a>
                    <a href="" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>
            </div>
        </section>
    )
}

export default Hero