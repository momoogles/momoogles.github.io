import React from "react"
// import { Link } from "gatsby"

import Layout from "components/templates/MainLayout"
import Image from "components/modules/Image"
import SEO from "components/modules/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>GH-actions-test!</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
