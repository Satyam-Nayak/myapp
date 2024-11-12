import React from 'react';
import '../CSS/Skills.css';  // Import your CSS file

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="HTML" className="skill-img"/>
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" alt="CSS" className="skill-img"/>
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png" alt="JavaScript" className="skill-img"/>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" alt="React JS" className="skill-img"/>
          <p>React JS</p>
        </div>
        <div className="skill">
          <img src="https://banner2.cleanpng.com/20180410/qgw/avf4qeujo.webp" alt="Node JS" className="skill-img"/>
          <p>Node JS</p>
        </div>
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="Express JS" className="skill-img"/>
          <p>Express JS</p>
        </div>
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png" alt="SQL" className="skill-img"/>
          <p>SQL</p>
        </div>
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon-thumbnail.png" alt="MongoDB" className="skill-img"/>
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png" alt="Bootstrap" className="skill-img"/>
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" className="skill-img"/>
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}
