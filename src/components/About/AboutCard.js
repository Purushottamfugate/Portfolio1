import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Know Who I Am</span>
            <br />
            Hi Everyone, I am <span className="purple">Purushottam Digambar Fugate</span> from <span className="purple">Pune, Maharashtra.</span>
            <br />
            Currently, I work as a <span className="purple">Java Backend Developer</span> at <span className="purple">Teople Technologies.</span>
            <br />
            I hold a Bachelor's degree in Computer Science from <span className="purple">Marathwada Mitra Mandal Institute Of Technology</span>, graduating with a CGPA of 8.25.
            <br />
            <br />
            Beyond coding, here are some of the things I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton 
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation & Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic", fontWeight: "bold" }}>
          "Transforming ideas into impactful realities!"
          </p>
          <footer className="blockquote-footer">Purushottam Fugate</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
