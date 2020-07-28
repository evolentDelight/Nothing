import React from "react"
import "./index.css"
import Nav from "../components/nav.js"
import Introduction from "../components/introduction.js"
import MainContent from "../components/MainContent.js"

export default function App() {
  return [<Nav />, <Introduction />, <MainContent />, <p id="pad"></p>]
}
