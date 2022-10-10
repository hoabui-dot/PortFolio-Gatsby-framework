import React from "react"
import "./Blog.scss"
import BlogItem from "./BlogItem/BlogItem"
import TitleSection from "../TitleSection/TitleSection"
import { graphql, useStaticQuery } from "gatsby"
import { faBandcamp } from "@fortawesome/free-brands-svg-icons"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogData {
      markdownRemark(frontmatter: { slug: { eq: "blog" } }) {
        frontmatter {
          blog {
            carrer
            description
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            job
            title
            work
          }
        }
      }
    }
  `)

  return (
    <section id="blog" className="section animated">
      <div className="container">
        <TitleSection title="blog" icon={faBandcamp} />
        <div className="blog">
          <div className="blog__wrap ">
            {data.markdownRemark.frontmatter.blog &&
              data.markdownRemark.frontmatter.blog.map((data, index) => (
                <BlogItem
                  flip={index % 2 === 0 ? "" : "flip"}
                  data={data}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
