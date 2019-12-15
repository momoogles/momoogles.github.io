import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "components/templates/MainLayout"
import SEO from "components/modules/Seo"
import ImgView from "components/modules/ImgView"

import './style.scss'

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
  const myContributionInfos = [
    {
      id: "C002",
      imgData: null,
      title: "Shinonome",
      date: "2019/12/05",
      description: "Moの所属サークルPlaygroundを運営している株式会社Shinonomの公式サイト。Moはお問い合わせページやヘッダー&フッター、各所修正に貢献しました。",
      link: "https://about.shinonome.io/",
      githubLink: null
    },
    {
      id: "C001",
      imgData: data.trousseImg.childImageSharp.fluid,
      title: "Trousse",
      date: "2019/11/23",
      description: "今日使うコスメを迷っているあなたに代わって今日のコスメを決めてくれるアプリ。Moの所属サークルOSKの先輩の指導を受けながら同級生と二人で作成しました。Moはフロントエンド全般に貢献しました。",
      link: "https://trousse.oskt.us/",
      githubLink: "https://github.com/TUS-OSK/trousse"
    },
  ]
  const myAppInfos = [
    {
      id: "MA002",
      imgData: data.shinkeiImg.childImageSharp.fluid,
      title: "Shinkeisuijaku",
      date: "2019/07/02",
      description: "プログラミングを始めて2ヶ月のぴよぴよプログラマーだった自分が頑張って作った神経衰弱です。",
      link: "https://momoogles.github.io/shinkeisuijaku",
      githubLink: "https://github.com/momoogles/shinkeisuijaku"
    },
    {
      id: "MA001",
      imgData: data.calculatorImg.childImageSharp.fluid,
      title: "Calculator",
      date: "2019/05/26",
      description: "プログラミングを始めて1ヶ月のぴよぴよプログラマーだった自分が頑張って作った電卓です。",
      link: "https://momoogles.github.io/calculator",
      githubLink: "https://github.com/momoogles/calculator"
    }
  ]

  const renderApps = (infoList) => (
    infoList.map(info => (
      <article class="app" key={`my-app-${info.id}`}>
        <div className="image-view-wrap">
          <ImgView imgData={info.imgData} title={info.title} link={info.link} githubLink={info.githubLink} />
        </div>
        <div className="info">
          <div className="date">{info.date}</div>
          <p className="description">{info.description}</p>
        </div>
      </article>
    ))
  )

  return (
    <Layout rootId="apps">
      <SEO title="Apps" />
      <main className="apps-inner">
        <section className="my-apps">
          <h2>My Apps</h2>
          <div className="apps-wrap">
            {renderApps(myAppInfos)}
          </div>
        </section>
        <section className="my-contributions">
          <h2>My Contributions</h2>
          <div className="apps-wrap">
            {renderApps(myContributionInfos)}
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default AppsPage
