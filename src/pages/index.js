import React from "react"
import "./index.css"
import Nav from "../components/nav.js"
import Introduction from "../components/introduction.js"
import MainContent from "../components/MainContent.js"
import Topic from "../components/Topic.js"
import Quotes from "../components/Quotes.js"
import Footer from "../components/Footer.js"

export default function App() {
  return [<Nav />, <Introduction />, <MainContent />, <Topic />, <Quotes />, <Footer />]
}
