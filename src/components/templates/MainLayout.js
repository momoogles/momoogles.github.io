import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/modules/Header"
import Footer from "components/modules/Footer"

import "./MainLayout.scss"

const Layout = ({ rootId, children, scrollTop }) => {
  const [navbarStatus, setNavbarStatus] = useState(false)
  const [mounted, setMounted] = useState(false)

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

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div id={rootId} className={`root ${mounted ? "-show" : ""}`}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        navbarStatus={navbarStatus}
        toggleNavbarStatus={toggleNavbarStatus}
        scrollTop={scrollTop}
      />
      <div className="sideStyle"></div>
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
