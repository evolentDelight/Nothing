import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import "./MainContent.css"

export default function MainContent() {
  const [isReached, setIsReached] = useState(false);
  
  useEffect(() =>{
    setIsReached(true);
  }, [])


  return (
    <div className="container-main">
      <CSSTransition in={isReached} classNames="slideIn" timeout={3500}>
        <p>Nothing</p>
      </CSSTransition>
    </div>
  )


  // return (
  //   <div className="container-main">
  //     <CSSTransition in={isReached} classNames="slideIn" timeout={3500}>
  //       <p>Nothing</p>
  //     </CSSTransition>
  //   </div>
  // )

}
//How to trigger Animate.css animation in ReactTransitionGroup
// classNames = {
//   enter: "animated",
//   enterActive: "rubberBand",
//   exit: "animated",
//   exitActive: "slideOutRight"