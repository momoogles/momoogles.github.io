import PropTypes from "prop-types"
import React from "react"

import MainLogo from 'components/modules/MainLogo'
import './Header.scss'
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const logoStyle = {
    width: "60px",
    height: "60px",
    margin: "4px"
  }

  return (
    <header className="main-header">
      <Link to="/" className="main-link">
        <MainLogo logoStyle={logoStyle} />
        <h1 className="title">{siteTitle}</h1>
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
