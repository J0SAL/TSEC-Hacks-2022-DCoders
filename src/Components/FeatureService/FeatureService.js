import React from 'react'

const FeatureService = () => {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container">

                <div className="row gy-4">

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-activity icon"></i></div>
                            <h4><a >Search Projects</a></h4>
                            <p>Search for different ongoing/completed projects and information about the overall project</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                            <h4><a>Contribute</a></h4>
                            <p>A user can contribute to the project of his/her domain by requesting for contribution to the developer</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                            <h4><a>Post Project</a></h4>
                            <p>You can post projects and make sure that you get other users to contribute if it fits their domain</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                            <h4><a>Make Connections</a></h4>
                            <p>Make connections with people and see their ongoing and completed projects</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FeatureService