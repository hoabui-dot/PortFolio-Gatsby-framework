import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./Description.scss"

const Description = () => {
  const data = useStaticQuery(graphql`
    query Description {
      markdownRemark(frontmatter: { slug: { eq: "description" } }) {
        frontmatter {
          description
        }
      }
    }
  `)

  return (
    <section id="description" className="description animated">
      <div className="container">
        <div className=" description__wrap box__shadow">
          <div className="description__content">
            <p>{data.markdownRemark.frontmatter.description}</p>
          </div>
          <div className="description__btn">
            <a href="https://drive.google.com/file/d/1Fzh_m7zsU1WxCrpifAV7-Xavb9mjbnG8/view?usp=sharing">
              download cv
            </a>
            <a href="#">contact me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
