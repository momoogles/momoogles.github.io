import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
// import Img from "gatsby-image"
import PropTypes from "prop-types"

import './AdCard.scss'

const AdCard = ({ paragraphList, adText, paragraphPosition, link, children }) => {
  const paragraphElements = paragraphList.map(paragraph => <div className="paragraph-wrap" key={`ad-title-${paragraph}`}><span className="belt">{paragraph}</span></div>)
  return (
    <div className="ad-card">
      <div className="image-wrap -show">
        <div className="ad-image">{children}</div>
        <h3 className={`sub-sub-title -flex-column -${paragraphPosition}`}>
          {paragraphElements}
        </h3>
        <div className="stars">
          <svg className="star" width="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
          <svg className="star" width="30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
        </div>
      </div>
      <p className="text">{adText}</p>
      <div className="link"><Link to={link}>詳しくみる→</Link></div>
    </div>
  )
}

AdCard.propTypes = {
  paragraphList: PropTypes.arrayOf(PropTypes.string),
  paragraphPosition: PropTypes.string,
  adText: PropTypes.string

}

export default AdCard
