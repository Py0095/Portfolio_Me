import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img1 from  '../../images/Portfolio.png'
import img2 from  '../../images/boutik.jpg'


function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Portfolio Website" img= {img1} link = "#"  />
            <ProjectBox title = "Boutik an liy" img= {img2} link = "#"  />
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
