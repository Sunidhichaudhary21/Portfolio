import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import CodingProfiles from '../components/CodingProfiles'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <CodingProfiles />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
