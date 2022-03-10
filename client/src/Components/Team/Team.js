import React from 'react'

const Team = () => {
    return (
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Our Team</h2>
                    <h1>D-Coders</h1>
                </div>

                <div className="row gy-5">

                    <div className="col-xl-3 col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="200">
                        <div className="team-member">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="member-info">
                                <div className="social">
                                <a><i className="bi bi-twitter"></i></a>
                                    <a><i className="bi bi-facebook"></i></a>
                                    <a><i className="bi bi-instagram"></i></a>
                                    <a><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Jeet Mistry</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="400">
                        <div className="team-member">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="member-info">
                                <div className="social">
                                <a><i className="bi bi-twitter"></i></a>
                                    <a><i className="bi bi-facebook"></i></a>
                                    <a><i className="bi bi-instagram"></i></a>
                                    <a><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Joy Almeida</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="600">
                        <div className="team-member">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="member-info">
                                <div className="social">
                                <a><i className="bi bi-twitter"></i></a>
                                    <a><i className="bi bi-facebook"></i></a>
                                    <a><i className="bi bi-instagram"></i></a>
                                    <a><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Sahil Chorghe</h4>
                                <span>Frontend Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="200">
                        <div className="team-member">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="member-info">
                                <div className="social">
                                    <a><i className="bi bi-twitter"></i></a>
                                    <a><i className="bi bi-facebook"></i></a>
                                    <a><i className="bi bi-instagram"></i></a>
                                    <a><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h4>Sachin Vishw</h4>
                                <span>Frontend Developer</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Team