import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import quotes from "../res/quotes"
import "./Quotes.css"

export default function Quotes() {
  //HandPicked Relevant Quotes
  //Maybe MongoDB as storage and extraction
  const [index, setIndex] = useState(0)

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
        <div className="leftarrow" role="button" tabIndex="0" onClick={() => handleLeftArrow()}>
          🛆
        </div>
      </div>
      <div className="box-quotes">
        <CSSTransition timeout={3500}>
          <div>
            <p><em>{quotearray[index].quote}</em></p>
            <h3>-{quotearray[index].name}</h3>
          </div>
        </CSSTransition>
      </div>
      <div className="box-arrow">
        <div className="rightarrow" role="button" tabIndex="0" onClick={() => handleRightArrow()}>
          🛆
        </div>
      </div>
    </div>
  )
}
