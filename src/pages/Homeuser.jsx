import React from 'react'
import AboutSection from "../components/Home/AboutSection";
import ChooseSection from "../components/Home/ChooseSection";
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import HeroSlider from "../components/Home/HeroSlider";
import ServicesSection from "../components/Home/ServicesSection";
import CoupSection from "../components/Home/CoupSection";
import CTASection from '../components/layouts/CTASection';

function Homeuser() {
  return (
 <>
<Header/> 
<HeroSlider/> 
<AboutSection/> 
<ServicesSection/> 
<ChooseSection/> 
<CoupSection/> 
<CTASection/>
<Footer/> 
 </> )
}

export default Homeuser