import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2 style={{ marginBottom: 10 }}>The projects I've worked on so far</h2>
    <p>
      I cannot show some of my best work here due to non disclosure agreements.
      I have worked with enterprise clients and built multi-lingual sites for
      goverment organistaions. Here are some of my latests works I'm allowed to
      display.
    </p>
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <div className="work-project">
        <a href="https://www.casefora.com/">
          <img
            className="work-logo"
            src={require('../images/CaseFora-logo.png')}
            alt="Casefora"
          />
        </a>
        <p>Front-End & Back-End Development</p>
        <div className="project-technologies">
          <span>React</span> <span>Redux</span> <span>WordPress</span>{' '}
          <span>Elasticsearch</span>
        </div>
      </div>

      <div className="work-project">
        <a href="https://www.lexcampus.in/">
          <img
            className="work-logo"
            src={require('../images/LexCampus-logo.png')}
            alt="LexCampus"
          />
        </a>
        <p>Front-End Development</p>
        <div className="project-technologies">
          <span>WordPress</span> <span>LearnDash</span>{' '}
          <span>React Native</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.techgrapher.com/">
          <img
            className="work-logo"
            src={require('../images/TechGrapher-logo.png')}
            alt="Techgrapher"
          />
        </a>
        <p>Front-End Development</p>
        <div className="project-technologies">
          <span>WordPress</span>
        </div>
      </div>
    </section>

    <h2 style={{ marginTop: 20, marginBottom: 10 }}>
      I have written for certain sites as well
    </h2>
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <div className="work-project">
        <a href="https://www.smashingmagazine.com/author/muhammad-muhsin/">
          <img
            className="work-logo"
            src={require('../images/smashing-magazine.svg')}
            alt="Smashing Magazine"
          />
        </a>
        <p>Writing, Reviewing</p>

        <div className="project-technologies">
          <span>React</span> <span>React Native</span> <span>WordPress</span>{' '}
          <span>Gutenberg</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.gatsbyjs.org/contributors/muhammad-muhsin/">
          <img
            className="work-logo"
            src={require('../images/gatsby-icon.png')}
            alt="Gatsby"
          />
        </a>
        <p>Writing</p>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span>
        </div>
      </div>
    </section>

    <h2 style={{ marginTop: 20, marginBottom: 10 }}>
      Some of my open source projects
    </h2>
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/celestial"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">celestial</h3>
          <p className="open-source-desc">
            A WordPress theme built with React.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/woocommerce-next"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">woocommerce-next</h3>
          <p className="open-source-desc">
            A Next.js (Server-side React) store that fetches fata from
            WooCommcere.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/laccadive-io/react-native-woocommerce-store"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">react -native-woocommerce-store</h3>
          <p className="open-source-desc">
            A React Native app that fetches data from WooCommerce.
          </p>
        </a>
      </div>
    </section>
  </Layout>
)

export default WorkPage
