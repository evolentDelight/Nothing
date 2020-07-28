import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import "./introduction.css"

export default function Introduction() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className="introduction-container textStyle">
      <CSSTransition in={fadeIn} classNames="fade" timeout={3500}>
        <div>
          <p>
            Existing before mankind,
          </p>
          <p>Even before the</p>
          <p>Big Bang...</p>
        </div>
      </CSSTransition>
    </div>
  )
}
