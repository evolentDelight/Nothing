import React from "react"
import "./nav.css"

export default function Nav() {
  return (
    <div className="container-nav">
      <nav className="nav-flexbox">
        <div className="company">
        <a href="https://github.com/evolentDelight" target="_blank">
            <strong><em>Nobody</em></strong>
          </a>
        </div>
        <div className="features">
          <a href="https://www.google.com/" target="_blank">Explore</a>
          <span className="nav-features-space"> </span>
          <a href="/">Support</a>
          <span className="nav-features-space"> </span>
          <a href="/">Author</a>
          <span className="nav-features-space"> </span>
        </div>
      </nav>
    </div>
  )
}
