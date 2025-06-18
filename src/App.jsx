import './App.css'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <>
      <div className="relative bg-black overflow-hidden">

        <div id="home" className="relative">
          <div className="shadow-top" />
          <Hero />
          <div className="shadow-bottom" />
        </div>

        <div id="services" className="relative">
          <div className="shadow-top" />
          <Services />
          <div className="shadow-bottom" />
        </div>

        <div id="about" className="relative">
          <div className="shadow-top" />
          <About />
          <div className="shadow-bottom" />
        </div>

        <div id="cta" className="relative">
          <div className="shadow-top" />
          <CTA />
          <div className="shadow-bottom" />
        </div>

        <div id="contact" className="relative">
          <div className="shadow-top" />
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
