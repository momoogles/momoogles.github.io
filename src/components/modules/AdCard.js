import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import './AdCard.scss'

const AdCard = ({ paragraphList, adText, paragraphPosition, link, children }) => {
  const paragraphElements = paragraphList.map(paragraph => <div className="paragraph-wrap"><span className="belt">{paragraph}</span></div>)
  return (
    <article className="ad-card">
      <div className="image-wrap -show">
        <div className="ad-image">{children}</div>
        <h3 className={`sub-sub-title -flex-column -${paragraphPosition}`}>
          {paragraphElements}
        </h3>
      </div>
      <p className="text">{adText}</p>
      <div className="link"><Link to={link}>詳しくみる→</Link></div>
    </article>
  )
}

AdCard.propTypes = {
  paragraphList: PropTypes.arrayOf(PropTypes.string),
  paragraphPosition: PropTypes.string,
  adText: PropTypes.string

}

export default AdCard
