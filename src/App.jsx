import './App.css'
import About from './Components/About'
import ContactForm from './Components/ContactForm'
import Experience from './Components/Experience'
import Footer from './Components/footer'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  
  return (
    <>
      <div className='bg-custom-gradient w-screen min-h-screen m-0 p-0 overflow-x-hidden'>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
