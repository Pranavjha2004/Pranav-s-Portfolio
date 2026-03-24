import React, { useState, useEffect } from "react";
import SplashScreen from "./Components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import CustomCursor from './Components/CustomCursor';
import ProgressPath from './Components/ProgressPath';
import CommandPalette from './Components/CommandPalette';
import Toast from './Components/Toast';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="portfolio-app">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          /* Use a Fragment so the Fixed UI and Animated Content are siblings */
          <React.Fragment key="content">
            
            {/* 1. FIXED UI: These stay pinned to the screen and don't scale */}
            <CustomCursor />
            <ProgressPath />
            <CommandPalette />
            <Toast />
            <NavBar />
            <ScrollToTop /> 

            {/* 2. ANIMATED CONTENT: Only the page content zooms in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "circOut" }}
            >
              <HeroSection />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certificates />
              <ContactForm />
              <Footer />
            </motion.div>

          </React.Fragment>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;