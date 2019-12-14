import React from "react"

import Layout from "components/templates/MainLayout"
import SEO from "components/modules/Seo"

const NewsPage = () => (
  <Layout rootId="news">
    <SEO title="News" />
    <h1>This page has my news!</h1>
  </Layout>
)

export default NewsPage
