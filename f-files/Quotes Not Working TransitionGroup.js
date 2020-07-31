import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import quotes from "../res/quotes"
import "animate.css"
import "./Quotes.css"

export default function Quotes() {
  //HandPicked Relevant Quotes
  //Maybe MongoDB as storage and extraction
  const [index, setIndex] = useState(0)
  const [animateSide, setAnimateSide] = useState(false)//false=left, true=right

  const quotearray = quotes()

  function handleLeftArrow() {
    if (index === 0) {
      setIndex(Object.keys(quotearray).length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function handleRightArrow() {
    if (index === Object.keys(quotearray).length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="container-quotes">
      <div className="box-arrow">
        <div className="leftarrow" role="button" tabIndex="0" onClick={() => {handleLeftArrow(); setAnimateSide(false)}}>
          🛆
        </div>
      </div>
      <div className="box-quotes">
        <TransitionGroup className="box-perquote">
          <CSSTransition
            key={index}
            timeout={500}
            classNames={animateSide ? "fadeRight" : "fadeLeft"}
          >
            <div className="box-perquote">
              <p><em>{quotearray[index].quote}</em></p>
              <h4>-{quotearray[index].name}</h4>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="box-arrow">
        <div className="rightarrow" role="button" tabIndex="0" onClick={() => {handleRightArrow(); setAnimateSide(true)}}>
          🛆
        </div>
      </div>
    </div>
  )
}
