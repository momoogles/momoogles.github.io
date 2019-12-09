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
      <p>サークルやアルバイトを通じて、クライアントエンジニアとしてサービスの開発に携わっていきます</p>
    </section>
    <section>
      <h2>高クオリティなイラストやロゴを届ける</h2>
      <p>小さな頃からイラストを描いてきたその経験を活かして、人の心に触れるデザインを考えていきます</p>
    </section>
    <section>
      <h2>統計的で論理的な情報を発信する</h2>
      <p>専攻している大学の勉強を通して、統計的かつ論理的な力を持った情報を発信していきます</p>
    </section>
    <p></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
