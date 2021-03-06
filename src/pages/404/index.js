import React from "react"

import Layout from "src/components/templates/MainLayout"
import SEO from "components/modules/Seo"

import './style.scss'

const NotFoundPage = () => (
  <Layout rootId="page404">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

