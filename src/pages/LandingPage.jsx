import React from 'react'
import NavLanding from '../components/NavLanding'
import Footer from '../components/Footer';
import Faqs from '../components/Faqs';
import Offerings from '../components/Offerings'
import HeroSection from '../components/HeroSection'
const LandingPage = () => {
  return (
    <div>
      <NavLanding/>
      <HeroSection/>
      <Offerings/>
      <Faqs/>
      <Footer />
    </div>
  )
}

export default LandingPage;
