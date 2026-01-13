import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import HeroUser from '../components/layouts/HeroUser'
import AboutInner from '../components/about/AboutInner'
import OthersSection from '../components/about/OthersSection'
import CTASection from '../components/layouts/CTASection'

function About() {
  return (
    <>
<Header/>
      <HeroUser pageName="About Us" pageLink={{ home: "Home" }} />
<AboutInner/>
<OthersSection/>
<CTASection/>
<Footer/>
    </>


)
}

export default About