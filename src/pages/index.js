import React from "react"

import SEO from "../components/seo"
import logo from "../images/logo.png"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <div className=" align-center">
      <div className="heading">
        <img className="logo" alt="logo" src={logo} />

        <h1 className="col-lg-10 align-center counter-logo"><span>coming soon</span></h1>
      </div>
    </div>
  </div>
)

export default IndexPage
