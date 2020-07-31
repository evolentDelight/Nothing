import React from "react"
import "./nav.css"

export default function Nav() {
  return (
    <div className="container-nav">
      <nav className="nav-flexbox">
        <div className="company">
        <a href="https://github.com/evolentDelight" target="_blank" rel="noreferrer">
            <strong><em>Nobody</em></strong>
          </a>
        </div>
        <div className="features">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">Explore</a>
          <span className="nav-features-space"> </span>
          <a href="/" rel="noreferrer">Support</a>
          <span className="nav-features-space"> </span>
          <a href="https://github.com/evolentDelight" target="_blank" rel="noreferrer">Author</a>
          <span className="nav-features-space"> </span>
        </div>
      </nav>
    </div>
  )
}
