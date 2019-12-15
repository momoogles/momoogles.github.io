import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"

import './Footer.scss'

const Footer = ({ siteAuthor }) => {
  return (
    <footer className="main-footer">
      <div className="copyright">© {new Date().getFullYear()} {siteAuthor}</div>
    </footer>
  )
}

export default Footer
