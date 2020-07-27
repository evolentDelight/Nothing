import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import "./introduction.css"

export default function Introduction() {
  const [fadeIn, setFadeIn] = useState(false)
  const [initial, setInitial] = useState(false)

  useEffect(() => {
    setFadeIn(true)
    setInitial(true)
  }, [])

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
