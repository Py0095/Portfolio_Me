import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/me.jpg'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Aliano</h2>
        <p>Hi, my name is Aliano CHARLES and I am a full-stack web developer programming has always been my passion and i have acquired solid knowledge with modern technologies like React js, Node js, Django,Python,  etc.. </p>
        <a href="https://www.linkedin.com/in/ahmedrohailawan/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
