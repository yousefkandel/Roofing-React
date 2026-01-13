import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import HeroUser from '../components/layouts/HeroUser'
import CTASection from '../components/layouts/CTASection'
import ServicesPage from '../components/ServicesPage/ServicesPage'

function Services() {
  return (
    <>
<Header/>
         <HeroUser pageName="Services " pageLink={{ home: "Home" }} />

<ServicesPage/> 
<CTASection/> 
<Footer/> 
</> )
}

export default Services