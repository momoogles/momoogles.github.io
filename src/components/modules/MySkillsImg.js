import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MySkillsImg = ({ mySkillsImgStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "my-three-skills.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={mySkillsImgStyle}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

MySkillsImg.propTypes = {
  mySkillsImgStyle: PropTypes.objectOf(PropTypes.string)
}

export default MySkillsImg