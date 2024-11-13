import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSS/Projects.css'

function Projects() {
  return (
    <Container id='projects' className="projects-section">
      <h2 className="text-center my-4">My Projects</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D12AQEWHzMrlFh0nQ/article-cover_image-shrink_600_2000/0/1651474032780?e=2147483647&v=beta&t=z28GT8q3CjQt7muAhWKoCN75JFU5TUItx7SAYsqw6F0" />
            <Card.Body>
              <Card.Title>Brain Tumor Detection (CNN)</Card.Title>
              <Card.Text>
                A project that leverages CNN algorithms to detect brain tumors from MRI scans.
              </Card.Text>
              <Button variant="primary" onClick={() => window.open("https://github.com/Satyam-Nayak/Brain-Tumor-Classification-Using-Deep-Learning-Algorithms", "_blank")}>GitHub</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="/Images/portfollioimg.png" />
            <Card.Body>
              <Card.Title>My Portfollio</Card.Title>
              <Card.Text>
                Here i used only React Js and For stying i used Bootstarp in this Project. 
              </Card.Text>
              <Button variant="primary" onClick={() => window.open("https://github.com/Satyam-Nayak/myapp", "_blank")}>GitHub</Button>
              
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/a8e47/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.png" />
            <Card.Body>
              <Card.Title>Weather Webpage</Card.Title>
              <Card.Text>
              In this project, I used HTML, CSS, and JavaScript, and integrated the OpenWeather API to fetch weather data for different locations.
              </Card.Text>
              <Button variant="primary" onClick={()=> window.open("https://github.com/Satyam-Nayak/weather-website","_blank")}>GitHub</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/ba2b3586ab9b4adf9542ca7757c5c553/projects/63d05d93a59d4d8fa0804d97985087ec/d7874679-bd47-4092-a610-f870036afdf9.jpeg" />
            <Card.Body>
              <Card.Title>Netflix Clone</Card.Title>
              <Card.Text>
              In this project, I used ReactJS along with an open movie API, which enables users to play trailers for each movie.
              </Card.Text>
              <Button variant="primary" onClick={()=> window.open("https://github.com/Satyam-Nayak/netflix-clone","_blank")}>GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
