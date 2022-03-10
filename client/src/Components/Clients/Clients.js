import React from 'react'

const Clients = () => {
    return (
        <>
        <section id="clients" className="clients"> 
        <div className="container" data-aos="fade-up">
        <div className="section-header">
        
        <h2>Made with</h2>
        </div>
        </div>
            <div className="container" data-aos="zoom-out">
                <div className="clients-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src="assets/img/clients/appwrite.svg" className="img-fluid" alt="clients" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/react.png" className="img-fluid" alt="clients" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/node.png" className="img-fluid" alt="clients" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/bt.png" className="img-fluid" alt="clients" /></div>
                        <div className="swiper-slide"><img src="assets/img/clients/htmjs.png" className="img-fluid" alt="clients" /></div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Clients