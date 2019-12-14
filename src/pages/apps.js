import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "components/templates/MainLayout"
import SEO from "components/modules/Seo"
import ImgView from "components/modules/ImgView"

import './apps.scss'

const AppsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      trousseImg: file(relativePath: { eq: "apps/trousse-demo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      shinkeiImg: file(relativePath: { eq: "apps/shinkeisuijaku-demo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      calculatorImg: file(relativePath: { eq: "apps/calculator-demo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const appImgInfos = [
    {
      imgData: data.trousseImg.childImageSharp.fluid,
      title: "Trousse",
      description: "Trousseは、今日使うコスメを迷っているあなたに代わって今日のコスメを決めてくれるアプリです。同級生と二人でサークルの先輩の指導を受けながら作成しました。",
      link: "https://trousse.oskt.us/",
      githubLink: "https://github.com/TUS-OSK/trousse"
    },
    {
      imgData: data.shinkeiImg.childImageSharp.fluid,
      title: "Shinkeisuijaku",
      description: "ぴよぴよプログラマーだった自分が頑張って作った神経衰弱です。",
      link: "https://momoogles.github.io/shinkeisuijaku",
      githubLink: "https://github.com/momoogles/shinkeisuijaku"
    },
    {
      imgData: data.calculatorImg.childImageSharp.fluid,
      title: "Calculator",
      description: "ぴよぴよプログラマーだった自分が頑張って作った電卓です。",
      link: "https://momoogles.github.io/calculator",
      githubLink: "https://github.com/momoogles/calculator"
    }
  ]

  const renderAppImgs = (infoList) => {
    return infoList.map(info => (
      <div className="app-img">
        <ImgView imgData={info.imgData} title={info.title} link={info.link} githubLink={info.githubLink} />
        {info.description}
      </div>
    ))
  }

  return (
    <Layout rootId="apps">
      <SEO title="Apps" />
      <div className="apps-inner">
        <h1>My Apps</h1>
        <section className="app-img-group">
          {renderAppImgs(appImgInfos)}
        </section>
      </div>
    </Layout >
  )
}

export default AppsPage
