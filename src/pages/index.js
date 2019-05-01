import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner,BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomepageComponents/QuickInfo"
import Gallery from "../components/HomepageComponents/Gallery-1"
import Menu from "../components/HomepageComponents/Menu"
//import styled from "styled-components"
//import { FaBeer } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
    <Banner title="eatery" subtitle="55 main street, Santa Monica, CA">
      <BannerButton style={{margin: '2rem auto'}}>Menu</BannerButton>
    </Banner>
    </HomeHeader>
    <QuickInfo/>
    <Gallery/>
    <Menu/>
  </Layout>
)

// const ButtonWrapper = styled.button`
//   background: blue;
//   color: white;
// `
export default IndexPage

