import React from 'react';
import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <a href="#home" className="logo"><span>Satyam</span>_N</a>
      <nav className="navbar">
        <a href="#about" className="active">About</a>
        <a href="#skills" className="not">Skills</a>
        <a href="#projects" className="active">Projects</a>
        {/* Replace # with your Google Drive link */}
        <a href="https://drive.google.com/file/d/1dmnqDnUdbuhFotUL39IKoHj1D3oxEaad/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
      <a href="#contact" className="contact">Contact Me</a>
    </header>
  );
}
