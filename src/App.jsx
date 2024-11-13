import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
 function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
