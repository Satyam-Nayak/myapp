import React from 'react';
import '../CSS/Aboutme.css'; 

export default function Aboutme() {
  return (
    <section id='about' className="home">
      <div className="home-content">
        <h3>Hi</h3>
        <h1>I am<span>Satyam<br/></span>a MERN Developer</h1>
        <p>
          Software engineer with a solid background in programming, an enthusiasm for coming up with novel ideas, and a focus on results. Shown capacity to complete excellent projects on schedule. Knowledgeable in several programming languages and with a focus on web development. Excels in cooperative team settings and rapidly picks up new technology.
        </p>
        <div className="btn-box">
          <a href="https://drive.google.com/file/d/1o7VtBDuq_IAvdoMqFnlnPBQ3g4Yqd-ez/view" target="_blank" rel="noopener noreferrer" className="btn-1">Resume</a>
          <button style={{textDecoration:"line-through"}} className="btn-2">Experience</button>
        </div>
      </div>
      <div className="img-box">
        <img src="/Images/sig_img-removebg-preview.png" alt="Profile" />
      </div>
    </section>
  );
}
