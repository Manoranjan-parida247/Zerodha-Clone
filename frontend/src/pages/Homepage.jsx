import React from 'react'
import Navbar from '../commonComponents/Navbar'
import Hero from '../components/home/Hero'
import Trust from '../components/home/Trust'
import Pricing from '../components/home/Pricing'
import Education from '../components/home/Education'
import AccountOpen from '../commonComponents/AccountOpen'
import Footer from '../commonComponents/Footer'
const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Trust />
        <Pricing />
        <Education />
        <AccountOpen />
        <Footer />
    </div>
  )
}

export default Homepage