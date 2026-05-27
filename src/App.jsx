import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'

import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App
