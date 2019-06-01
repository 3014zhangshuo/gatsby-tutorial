import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link> 
    <Header headerText="Hello Gatsby!" />
    <Header headerText="It's pretty cool" />
    <p>Hello Gatsby!</p>
  </div>
)
