import React from 'react'
import './SkillsBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function SkillsBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div data-aos = {props.animation}>
       <div className="card">
          <div class="box">
            <div className="icon"><i class={props.icon}></i></div>
            <div className="heading">{props.heading}</div>
            <p className='text'>{props.text}</p>
          </div>
        </div>    
    </div>
    </>
  )
}

export default SkillsBox
