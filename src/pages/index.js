import React from "react"
// import { Link } from "gatsby"

import Layout from "components/templates/MainLayout"
import MainLogo from "components/modules/MainLogo"
import SEO from "components/modules/Seo"
import AdCard from "components/modules/AdCard"

import './index.scss'

const IndexPage = () => {
  const logoStyle = {
    width: "70%",
  }

  return (
    <Layout rootId="top">
      <SEO title="Home" />
      <section className="top-area">
        <div className="logo-wrap">
          <MainLogo logoStyle={logoStyle} />
        </div>
        <svg className="wave" viewBox="0 0 100 25" width="50%">
          <path d="M 0 25 Q 50 0 100 25" fill="#fffdfd" />
        </svg>
        <h2 className="sub-title">ようこそ！Mo's Home へ！</h2>
        <p className="text">Mo's Home はとある理系大学で勉学に勤しむ"Mo"の活躍を記したサイトです！</p>
      </section>
      <section className="main-area">
        <svg className="wave" viewBox="0 0 100 25" width="50%" >
          <path d="M 0 0 Q 50 25 100 0" fill="#d87d7d" />
        </svg>
        <AdCard
          paragraphList={["より良いUI/UXを持った", "サービスの開発を行う"]}
          paragraphPosition="right"
          adText="サークルやアルバイトを通じて、クライアントサイドエンジニアとしてサービスの開発に携わっていきます"
          link="/apps"
        >
          <svg width="60%" aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-restore" className="svg-inline--fa fa-window-restore fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"></path></svg>
        </AdCard>
        <AdCard
          paragraphList={["高クオリティな", "イラストやロゴを届ける"]}
          paragraphPosition="left"
          adText="小さな頃からイラストを描いてきたその経験を活かして、人の心に触れるデザインを考えていきます"
          link="/illusts"
        >
          <svg width="60%" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-nib" className="svg-inline--fa fa-pen-nib fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M136.6 138.79a64.003 64.003 0 0 0-43.31 41.35L0 460l14.69 14.69L164.8 324.58c-2.99-6.26-4.8-13.18-4.8-20.58 0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48c-7.4 0-14.32-1.81-20.58-4.8L37.31 497.31 52 512l279.86-93.29a64.003 64.003 0 0 0 41.35-43.31L416 224 288 96l-151.4 42.79zm361.34-64.62l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91z"></path></svg>
        </AdCard>
        <AdCard
          paragraphList={["統計的で論理的な", "情報を発信する"]}
          paragraphPosition="right"
          adText="大学で専攻している統計学の勉強を通して、統計的かつ論理的な力を持った情報を発信していきます"
          link="/news"
        >
          <svg width="60%" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" className="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
        </AdCard>
      </section>
    </Layout >
  )
}

export default IndexPage
