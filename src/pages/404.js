import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontSize: "4rem" }}>Oops,</h1>

    <div style={{ width: "70%" }}>
      <p>
        Hmmm, it looks like something is a miss... I shall check this out later.
      </p>
      <br />
      <Link to="/">Go Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
