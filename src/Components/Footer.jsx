import React, { useState } from 'react';
import '../CSS/Footer.css';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formsubmit.co/ajax/sop97541@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Message sent successfully!");
          setFormData({ name: '', email: '', number: '', message: '' });
        }
      })
      .catch(error => alert("Error sending message"));
  };

  return (
    <footer id='contact' className="footer">
      <div className="footer-left">
        <img src="/Images/sig_img-removebg-preview.png" alt="Signature" className="signature" />
        <p className="contact-info"><strong>Name:</strong> Satyam Nayak</p>
        <p className="contact-info"><strong>Contact No:</strong> 999-333-9898</p>
        <p className="contact-info"><strong>Email:</strong> sop97541@gmail.com</p>
      </div>

      <div className="footer-middle">
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="number" placeholder="Your Contact Number" value={formData.number} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="footer-right">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/satyam-nayak-26june2002/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://twitter.com/SatyamN261" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/ig_satyam_n.26/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://drive.google.com/file/d/1dmnqDnUdbuhFotUL39IKoHj1D3oxEaad/view" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google-drive"></i></a>
          <a href="https://github.com/Satyam-Nayak" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
