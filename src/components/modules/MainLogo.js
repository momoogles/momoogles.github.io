import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainLogo = ({ logoStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mo-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={logoStyle}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

MainLogo.propTypes = {
  logoStyle: PropTypes.objectOf(PropTypes.string)
}

export default MainLogo
