import React from 'react'
import About from '../About/About';
import CallToAction from '../CallToAction/CallToAction';
import Clients from '../Clients/Clients';
import FeatureService from '../FeatureService/FeatureService';
import FeatureSection from '../FeaturesSection/FeatureSection';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import OnFocus from '../OnFocus/OnFocus';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';
import Pricing from '../Pricing/Pricing';
import Contacts from '../Contacts/Contacts';
import Team from '../Team/Team';
import FAQ from '../FAQ/FAQ';

const Home = () => {
  return (
      <>
      <Header />
      <Hero />
      <main id="main">
        <FeatureService />
        <About />
        <Clients />
        <FAQ />
        <Team />
        <Contacts />
        <Footer />
      </main>
      </>
  )
}

export default Home