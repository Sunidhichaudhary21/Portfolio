import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfileDetails from '../components/ProfileDetails'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="home bg-[#FFFDF9] min-h-screen">
            <Navbar />
            <Hero />
            <ProfileDetails />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
