import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TitleSection from "../../TitleSection/TitleSection"
import FolderTree from "../FolderTree"
import MoreInfo from "./MoreInfo/MoreInfo"
import { faReadme } from "@fortawesome/free-brands-svg-icons"
import "./Education.scss"

const Education = () => {
  const data = useStaticQuery(graphql`
    query EduData {
      markdownRemark(frontmatter: { slug: { eq: "education" } }) {
        frontmatter {
          education {
            description
            flip
            keyword
            school
            time
            title
          }
        }
      }
    }
  `)

  const [state, setState] = useState(false)
  return (
    <section id="education" className="education">
      <div className="container">
        <TitleSection title="education" icon={faReadme} />
        <FolderTree
          setState={setState}
          dataFolderTree={data.markdownRemark.frontmatter.education}
          tree="edu"
        />
        <MoreInfo state={state} setState={setState} />
      </div>
    </section>
  )
}

export default Education
