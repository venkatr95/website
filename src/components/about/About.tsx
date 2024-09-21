import { Container } from "./styles";
import Venkat from "../../assets/venkat.png";
import cIcon from "../../assets/c++_icon.svg";
import pyIcon from "../../assets/python-icon.svg";
import flutterIcon from "../../assets/flutter-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
        <p className="justify-text">
            Hi there! I'm Venkat, a software and product developer with a passion for creating hassle-free experiences for my customers.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p className="justify-text">
          I work as an Engineer in a cross-functional team of five, building unique use-cases that commit to a one-package solution.
          I'm deeply passionate about creating trusted and user-friendly products that help end-users or vendors to upskill their business.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p className="justify-text">
          If you catch me outside of work, I'm an avid traveler - 10 countries and counting - and a fan of cricket and football!
          I also like meeting new people over a cup of coffee. Always like to discuss on new ideas and strategies.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main competencies:</h3>
          <p>
            Frontend - React, Angular (Typescript) <br/>
            Backend - C++, Python <br/>
            DB - MongoDB, PostgreSQL <br/>
            Cloud - AWS <br/>
            API Design - REST, gRPC, GraphQL <br/>
            OS Competency - Linux and Windows <br/>
          </p>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={cIcon} alt="C++" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={pyIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={flutterIcon} alt="Flutter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={cIcon} alt="C++" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Venkat} alt="Venkat Madhavan" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
