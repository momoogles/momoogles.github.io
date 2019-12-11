import PropTypes from "prop-types"
import React from "react"

import MainLogo from 'components/modules/MainLogo'
import './Header.scss'
import { Link } from "gatsby"

const Header = ({ siteTitle, navbarStatus, toggleNavbarStatus, scrollTop }) => {
  const logoStyle = {
    width: "60px",
    height: "60px",
    margin: "4px"
  }

  const svgStyle = {
    height: "44px",
    margin: "12px"
  }

  return (
    <header className={`main-header ${navbarStatus ? "-open" : ""} ${scrollTop > 640 ? "-white" : ""}`}>
      <Link to="/" className="main-link">
        <MainLogo logoStyle={logoStyle} />
        <h1 className="title">{siteTitle}</h1>
      </Link>
      <button className="nav-toggle" onClick={toggleNavbarStatus}>
        <svg style={svgStyle} aria-hidden="true" focusable=" true" data-prefix="fas" data-icon="map-signs" className="svg-inline--fa fa-map-signs fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path color="#543e3e" fill="currentColor" d="M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63zM224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64v112zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24z"></path>
        </svg>
      </button>
      <nav className="simple-nav">
        <Link to="/">Top</Link>
        <Link to="/apps">Apps</Link>
        <Link to="/illusts">Illusts</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav className="wide-nav">
        <Link to="/apps">Apps</Link>
        <Link to="/illusts">Illusts</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
