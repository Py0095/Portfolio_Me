import React from 'react'
import './Skills.css'
import SkillsBox from '../../components/SkillsBox/SkillsBox'

function Skills() {
  return (
    <>
    <div id="Skills" className='skills    '>
      <h1>My Skills</h1>
      <div className="boxes">
        <SkillsBox animation = "fade-up" icon = "fas fa-globe" heading = "Python" text = "We offers a variety of website design and development services in which we use modern technologies of Era.." />
        <SkillsBox animation = "fade-up" icon = "fas fa-code" heading = "Software Development" text = "Software development is an amalgamation of several activities like designing, testing, programming.."/>
        <SkillsBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Software Testing" text = "We provides professional software testing solutions to the valueable customers.." />
        <SkillsBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Web Hosting" text = "A web host, or web hosting service provider, is a business that provides the technologies and services .." />
        <SkillsBox animation = "fade-up" icon = "fas fa-users" heading = "Trainings" text = "Our training solutions are developed by subject matter experts to help organizations.." />
        <SkillsBox animation = "fade-up" icon = "fas fa-video" heading = "Video Editing" text = "We provides professional video editing services for your commercials and YouTube.." />
      </div>
    </div>
    </>
  )
}

export default Skills
