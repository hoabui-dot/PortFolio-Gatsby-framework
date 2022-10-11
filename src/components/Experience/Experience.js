import React, { useState } from "react"
import TitleSection from "../TitleSection/TitleSection"
import FolderTree from "../FolderTree/FolderTree"
import { graphql, useStaticQuery } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query ExperienceData {
      markdownRemark(frontmatter: { slug: { eq: "experience" } }) {
        frontmatter {
          expIcon {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          experience {
            description
            keyword
            school
            time
            title
          }
        }
      }
    }
  `)
  const expIcon = data.markdownRemark.frontmatter.expIcon.childImageSharp.fluid

  return (
    <section id="experience" className="experience">
      <div className="container">
        <TitleSection title="experience" image={expIcon} />
        <FolderTree
          dataFolderTree={data.markdownRemark.frontmatter.experience}
          tree="exp"
        />
      </div>
    </section>
  )
}

export default Experience
