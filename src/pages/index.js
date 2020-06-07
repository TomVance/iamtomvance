import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../stylesheets/home.module.css"

import carriden from "../images/carriden.webp"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Tom Vance | Product Developer" />

      <div className={styles.page}>
        <div>
          <h1>
            Hey! I'm Tom, a <span>software engineer</span> based out of London
            in the UK. I'm passionate about building great products.
          </h1>
          <p className={styles.handle}>
            <a title="Find me on Twitter" href="https://twitter.com/tomvance94">
              @tomvance94
            </a>
          </p>
        </div>
      </div>

      <div className={styles.caseStudies}>
        <div className={styles.caseStudy}>
          <div className={styles.caseStudyImg}>
            {/* <img src={ibdrelief} alt="Carriden Church website" /> */}
          </div>
          <div className={styles.caseStudyContent}>
            <h2>IBD Relief</h2>
            <p>
              Progressive web application designed to provide support for
              members of the IBD community. Built from the ground up using React
              and Typescript.
            </p>
          </div>
        </div>

        <div className={styles.caseStudy}>
          <div className={styles.caseStudyImg}>
            <img src={carriden} alt="Carriden Church website" />
          </div>
          <div className={styles.caseStudyContent}>
            <h2>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://carridenchurch.co.uk"
              >
                Carriden Church
              </a>
            </h2>
            <p>
              Simple staticly generated site for Carriden Church, using Gatsby.
              Content managed via Contentful and hosted on Netflify.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
