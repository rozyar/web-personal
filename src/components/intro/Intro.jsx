import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Emanuela Klaudat is a marketing expert with a unique talent for creating innovative marketing strategies that deliver results. With her creative mind and passion for marketing, she has become a leader in the industry, known for her ability to turn complex concepts into simple, effective solutions. Her expertise in market research, branding, and digital marketing make her an invaluable asset to any team. Whether you're looking to increase brand awareness, drive sales, or create a memorable customer experience, Emanuela is the expert you need on your side. With her wealth of knowledge and experience, she will help you to reach your marketing goals and take your business to the next level.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro