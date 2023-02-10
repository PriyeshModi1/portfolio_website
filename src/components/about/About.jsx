import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small> 20+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 15+ Completed </small>
            </article>
          </div>
          
          {/* <p>I'm very ambitious Full-Stack developer looking for a role in establish IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
          <p>I'm quietly confident, naturally curious and perpetually working on improving my chops one design problem at a time.</p>
          <p>If I need to define myself in one sentence that would be a family-person, a games fanatic, fitness enthusiast and tech-obsessed !!!</p> */}

          <p>Hi, I'm Priyesh, a full stack web developer with 1+ years passion for creating intuitive and engaging websites and web applications. With experience in both front-end and back-end development, I have the skills and knowledge to bring your projects to life from start to finish.</p>

          <p>I have a strong background in HTML/CSS, JavaScript, React, NodeJS, ExpressJS MongoDb, SQL etc., and a passion for using technology to solve complex problems and improve the user experience. Whether I am working on a simple website or a complex web application, I always strive to deliver clean, efficient code that is both visually appealing and functional.</p>

          <p>My approach to development is centered around collaboration and open communication. I believe that by working closely with my clients and stakeholders, I can truly understand their needs and deliver a product that exceeds their expectations.</p>

          <p>When I am not coding, I enjoy hitting GYM or Listening Music, and staying up to date on the latest developments in the web development world.</p>

          <p>If you're looking for a full stack developer who is dedicated, knowledgeable, and passionate about their work, look no further. Let's work together to bring your next project to life!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About    