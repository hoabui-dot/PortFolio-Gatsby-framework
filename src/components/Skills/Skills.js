import React from "react"
import Field from "./SkillsField/SkillsField"
import TitleSection from "../TitleSection/TitleSection"
import "./Skills.scss"
import { graphql, useStaticQuery } from "gatsby"
import { faMixer } from "@fortawesome/free-brands-svg-icons"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query Skills {
      markdownRemark(frontmatter: { slug: { eq: "skill" } }) {
        frontmatter {
          skill {
            list {
              language
              percent
            }
            title
          }
        }
      }
    }
  `)

  return (
    <section id="skill" className="skills animated">
      <div className="container">
        <TitleSection title="skills" icon={faMixer} />
        <div className="skills__wrap">
          {data.markdownRemark.frontmatter.skill &&
            !!data.markdownRemark.frontmatter.skill &&
            data.markdownRemark.frontmatter.skill.map((data, index) => (
              <Field key={index} data={data} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
