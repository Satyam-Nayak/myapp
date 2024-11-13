import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
 function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
    </React.Fragment>
  )
}

export default App;
