import React from 'react'
import {NavigationDots, SocialMedia} from "../components"

const appWrap = (Component, idName, classNames) => function HOC(){
  return (
    <div 
      id='idName' 
      className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app_flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2020 Juan</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default appWrap