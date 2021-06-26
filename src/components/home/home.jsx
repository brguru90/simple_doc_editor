import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./style.scss"

import page1 from "../../assets/page1.jpg"
import page2 from "../../assets/page2.jpg"
import page3 from "../../assets/page3.jpg"
import page4 from "../../assets/page4.jpg"

export default class home extends Component {
  

    render() {
        return (
           <div className="home">
               <div className="resume_heading">Resume</div>
              <img src={page1} className="resume" />
              <img src={page2}  className="resume" />
              <img src={page3}  className="resume" />
              <img src={page4}  className="resume" />
              
           </div>
        )
    }
}
