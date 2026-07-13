import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfileDetails from '../components/ProfileDetails'
import Skills from '../components/Skills'
import CodingProfiles from '../components/CodingProfiles'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home bg-[#FDF8F3] min-h-screen">
            <Navbar />
            <Hero />
            <ProfileDetails />
            <Skills />
            <CodingProfiles />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
