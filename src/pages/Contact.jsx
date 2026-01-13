import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import HeroUser from '../components/layouts/HeroUser'
import ContactUs from '../components/contact/ContactUs'
import CTASection from '../components/layouts/CTASection'

function Contact() {
  return (
    <>
<Header/>
         <HeroUser pageName="Contact Us" pageLink={{ home: "Home" }} />

<ContactUs/> 
<CTASection/> 
<Footer/> 
</> )
}

export default Contact