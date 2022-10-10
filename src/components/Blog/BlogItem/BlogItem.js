import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogItem = ({ data, flip }) => {
  const { carrer, description, image, job, title, work } = data
  return (
    <div className={`blog__item ${flip}`}>
      <div className="item__image">
        <figure>
          <Img fluid={image.childImageSharp.fluid} />
          <div className="image__infos">
            <div className="user">
              <i className="fa fa-user"></i> John Doe
            </div>
            <div className="time">
              <i className="fa-solid fa-clock"></i> August 7, 2020
            </div>
            <div className="talk">
              <i className="fa-solid fa-comments"></i> 168
            </div>
          </div>
        </figure>
      </div>
      <div className="item__content">
        <div className="job">
          <button className="job__field">{carrer}</button> /{" "}
          <button className="job__name">{job}</button> /{" "}
          <span className="job__working">{work}</span>
        </div>
        <div className="description">
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className="readMore">
          <Link to="#">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
