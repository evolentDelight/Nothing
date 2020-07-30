import React, { useState, useEffect, useCallback } from "react"
import { CSSTransition } from "react-transition-group"
import "./Topic.css"
import "animate.css"

export default function Topic(){
  const [isAnimated, Animate] = useState(false);

  const handleAnimationEvent = useCallback(() =>{
    const element = document.getElementsByClassName("container-main")[0].getBoundingClientRect();

    if(element.bottom <= 350){
      Animate(true);
      window.removeEventListener("scroll", handleAnimationEvent)
    }
  }, [])

  useEffect(() =>{
    window.addEventListener("scroll", handleAnimationEvent)

    return () => {window.removeEventListener("scroll", handleAnimationEvent)}
  }, [handleAnimationEvent])

  return(
    <div className="container-topic">
      <div className="text">
        <p>Human<br></br> Concept<br></br> of<br></br> Nothing</p>
      </div>
      <div className="model">
        <CSSTransition in={isAnimated} classNames="slideInLeft" timeout={3500}>
          <div className={`box-topic ${isAnimated ? `reveal` : `hidden`}`}></div>
        </CSSTransition>
      </div>
    </div>
  )
}