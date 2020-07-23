import React from "react"
import "./nav.css"
//import css

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav-flexbox">
        <div className="company">
          <a href="/">
            <strong>Nobody</strong>
          </a>
        </div>
        <div className="features">
          <a href="/">a</a>
          <a href="/">b</a>
          <a href="/">c</a>
        </div>
      </nav>
    </div>
  )
}
