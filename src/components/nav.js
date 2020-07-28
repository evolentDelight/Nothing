import React from "react"
import "./nav.css"

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav-flexbox">
        <div className="company">
          <a href="/">
            <strong><em>Nobody</em></strong>
          </a>
        </div>
        <div className="features">
          <a href="/">Explore</a>
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
