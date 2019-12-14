/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from 'react';

import Header from "components/modules/Header"
import Footer from "components/modules/Footer"

import "./MainLayout.scss"

const Layout = ({ rootId, children, scrollTop }) => {
  const [navbarStatus, setNavbarStatus] = useState(false)
  const toggleNavbarStatus = () => {
    setNavbarStatus(!navbarStatus)
  }
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <div className="root" id={rootId}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navbarStatus={navbarStatus}
        toggleNavbarStatus={toggleNavbarStatus}
        scrollTop={scrollTop}
      />
      <div className="contents-wrap">{children}</div>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  rootId: PropTypes.string.isRequired
}

export default Layout
