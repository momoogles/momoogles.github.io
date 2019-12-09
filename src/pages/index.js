import React from "react"
// import { Link } from "gatsby"

import Layout from "components/templates/MainLayout"
import Image from "components/modules/Image"
import SEO from "components/modules/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Mo's Home!</h1>
    <section>
      <h2>より良いUXを持ったサービスの開発を行う</h2>
    </section>
    <section>
      <h2>高クオリティなイラストやロゴを届ける</h2>
    </section>
    <section>
      <h2>統計的で論理的な情報を発信する</h2>
    </section>
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
