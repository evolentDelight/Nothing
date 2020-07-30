import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import quotes from "../res/quotes"
import "animate.css"
import "./Quotes.css"

export default function Quotes() {
  //HandPicked Relevant Quotes
  //Maybe MongoDB as storage and extraction
  const [index, setIndex] = useState(0)
  const[animateState, setanimateState] = useState(false)
  const [AnimateLeft, setAnimateLeft] = useState(false)
  const [AnimateRight, setAnimateRight] = useState(false)

  const quotearray = quotes()


  function handleLeftArrow() {
    if (index === 0) {
      setIndex(Object.keys(quotearray).length - 1)
      setAnimateLeft(true)
      setAnimateRight(false);
    } else {
      setIndex(index - 1)
      setAnimateLeft(true)
      setAnimateRight(false)
    }
  }

  function handleRightArrow() {
    if (index === Object.keys(quotearray).length - 1) {
      setIndex(0)
      setAnimateRight(true)
      setAnimateLeft(false)
    } else {
      setIndex(index + 1)
      setAnimateRight(true)
      setAnimateLeft(false)
    }
  }

  return (
    <div className="container-quotes">
      <div className="box-arrow">
        <div className="leftarrow" role="button" tabIndex="0" onClick={() => {handleLeftArrow(); setanimateState(!animateState)}}>
          🛆
        </div>
      </div>
      <div className="box-quotes">
        <CSSTransition in={animateState} classNames={`${AnimateLeft ? "fadeLeft" : "fadeRight"}`} timeout={500}>
          <div>
            <p><em>{quotearray[index].quote}</em></p>
            <h4>-{quotearray[index].name}</h4>
          </div>
        </CSSTransition>
      </div>
      <div className="box-arrow">
        <div className="rightarrow" role="button" tabIndex="0" onClick={() => {handleRightArrow(); setanimateState(!animateState)}}>
          🛆
        </div>
      </div>
    </div>
  )
}
