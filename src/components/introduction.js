import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import "./introduction.css"

export default function Introduction() {
  const [fadeIn, setFadeIn] = useState(false)
  const [initial, setInitial] = useState(true)

  //Add a scroll toggle to trigger the animation
  window.addEventListener("scroll", () => {
    const element = document
      .getElementsByClassName("nav-flexbox")[0]
      .getBoundingClientRect()
    console.log("Introduction -> element.bottom", element.bottom)
    if (element.bottom <= 250) {
      setFadeIn(true)
      setInitial(true)
    }
    if (element.bottom >= 500) {
      setFadeIn(false)
    }
  })

  return (
    <div className="introduction-container textStyle">
      <CSSTransition in={fadeIn} classNames="fade" timeout={3500}>
        <div>
          <p className={`${initial ? "reveal" : "hide"}`}>
            Existing before mankind,
          </p>
          <p className={`${initial ? "reveal" : "hide"}`}>Even before the</p>
          <p className={`${initial ? "reveal" : "hide"}`}>Big Bang...</p>
        </div>
      </CSSTransition>
    </div>
  )
}
