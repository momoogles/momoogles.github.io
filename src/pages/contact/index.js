import React from "react"

import Layout from "components/templates/MainLayout"
import SEO from "components/modules/Seo"

import './style.scss'

const ContactPage = () => (
  <Layout rootId="contact">
    <SEO title="Contact" />
    <h1>This page is a contact page.</h1>
  </Layout>
)

export default ContactPage
