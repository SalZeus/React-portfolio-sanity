import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        { ["home", "about", "work", "skills", "testimonials", "contact"].map((item, index)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
    </div>
  )
}

export default NavigationDots