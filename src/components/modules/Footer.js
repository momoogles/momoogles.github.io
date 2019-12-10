// import PropTypes from "prop-types"
import React from "react"

import './Footer.scss'

const Footer = ({ siteAuthor }) => {
  console.log(siteAuthor)

  return (
    <footer className="main-footer">
      <div className="copyright">© {new Date().getFullYear()} {siteAuthor}</div>
    </footer>
  )
}

export default Footer
