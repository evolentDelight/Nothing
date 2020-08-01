import React from "react"
import Nav from "../components/nav.js"
import Footer from "../components/Footer.js"
import "./404.css"

export default function Error(){
  return(
    [
    <Nav />,
    <div class="container-error">
      <div class="box-error">
        <h1>That Page Does Not Exist</h1>
        <a href="/">Go Back to HomePage</a>
      </div>
    </div>,
    <Footer />
    ]
  )
}