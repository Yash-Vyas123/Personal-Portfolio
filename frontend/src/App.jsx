import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`App ${!isLoaded ? 'hidden' : ''}`}>
        <ThreeBackground />
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
