import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion"

import {images} from "../../constants"

import "./About.scss"

const abouts = [
  {title: "Frontend Web Development", description: "I am a Web developer", imgUrl: images.about01},
  {title: "Audio Engineering", description: "I am an Audio Engineer", imgUrl: images.about02},
  {title: "Customer Service Representative", description: "I am a Web developer and Audio Engineer", imgUrl: images.about03},
  {title: "Customer Service Representative", description: "I am a Web developer and Audio Engineer", imgUrl: images.about04}
]
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Design </span><br />
         means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) =>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.2, type: "tween"}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About