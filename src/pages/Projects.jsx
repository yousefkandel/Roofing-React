import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import HeroUser from '../components/layouts/HeroUser'
import CTASection from '../components/layouts/CTASection'
import ProjectsPage from '../components/projectspage/ProjectsPage'

function Projects() {
  return (
    <>
<Header/>
         <HeroUser pageName="Projects " pageLink={{ home: "Home" }} />

<ProjectsPage/> 
<CTASection/> 
<Footer/> 
</> )
}

export default Projects