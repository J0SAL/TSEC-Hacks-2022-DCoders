import React from 'react'

const FAQ = () => {
    return (
        <section id="faq" className="faq">
            <div className="container-fluid" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                        <div className="content px-xl-5">
                            <h3>Frequently Asked <strong>Questions</strong></h3>
                            <p>
                               Here are the most Frequently asked Questions by our clients
                            </p>
                        </div>

                        <div className="accordion accordion-flush px-xl-5" id="faqlist">

                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        What is DevMeet and how does it work? 
                                    </button>
                                </h3>
                                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    DevMeet is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like DevMeet Actions and Packages. If you’re just getting started with DevMeet, you may know us best as a place for version control and collaboration. 
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Why is DevMeet so popular?
                                    </button>
                                </h3>
                                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    DevMeet is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, DevMeet has become the go-to place to collaborate and build software together. 
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Who is DevMeet for? 
                                    </button>
                                </h3>
                                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    You! And it’s not just developers who build on DevMeet—Fortune 500 companies, small teams, project managers, and college professors all use DevMeet to do their best work, in one place. 
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Do people use DevMeet only for code? 
                                    </button>
                                </h3>
                                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Nope. Like we mentioned above, different people and teams use DevMeet for different projects. While we got our start as a version control platform, DevMeet is now used to manage teams, share resumes, find new projects, track work, and host discussions, just to name a few. 
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                        <i className="bi bi-question-circle question-icon"></i>
                                        Why should I use DevMeet? 
                                    </button>
                                </h3>
                                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                    DevMeet isn’t just a place to share code. It’s a chance to do something bigger. On GitHub, you can shape the future of software, work with the best developers in the world, and grow your skills and help others. 
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ