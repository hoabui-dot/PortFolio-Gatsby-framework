import React, { useState } from "react"
import TitleSection from "../TitleSection/TitleSection"
import FolderTree from "../FolderTree/FolderTree"
import MoreInfoExp from "./MoreInfoExp/MoreInfoExp"
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

  const [state, setState] = useState(false)

  return (
    <section id="experience" className="experience">
      <div className="container">
        <TitleSection title="experience" image={expIcon} />
        <FolderTree
          setState={setState}
          dataFolderTree={data.markdownRemark.frontmatter.experience}
          tree="exp"
        />
        <MoreInfoExp state={state} setState={setState} />
      </div>
    </section>
  )
}

export default Experience
