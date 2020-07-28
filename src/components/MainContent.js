import React, { useState, useEffect, useCallback } from "react"
import { CSSTransition } from "react-transition-group"
import "./MainContent.css"
import "animate.css"

export default function MainContent() {
  const [isReached, setIsReached] = useState(false)

  // const handleRemoveEvent = useCallback(() =>{//use Callback sequence to remove eventlistener
  //   window.removeEventListener("scroll", handleScrollEvent);
  // })

  const handleScrollEvent = useCallback(() => {
    const element = document.getElementsByClassName("introduction-container")[0].getBoundingClientRect();

    if(element.bottom <= 350){
      setIsReached(true)
      // handleRemoveEvent();
      window.removeEventListener("scroll", handleScrollEvent)
    }
  }, [])

  useEffect(() =>{
    window.addEventListener("scroll", handleScrollEvent)

    return () => window.removeEventListener("scroll", handleScrollEvent)
  }, [handleScrollEvent])

  return (
    <div className="container-main">
      <CSSTransition in={isReached} classNames="slideIn" timeout={3500}>
        <p className={isReached ? 'reveal' : 'hidden'}>Nothing</p>
      </CSSTransition>
    </div>
  )
}
//How to trigger Animate.css animation in ReactTransitionGroup
// classNames = {
//   enter: "animate__animated",
//   enterActive: "animate__rubberBand",
//   exit: "animate__animated",
//   exitActive: "animate__slideOutRight"
