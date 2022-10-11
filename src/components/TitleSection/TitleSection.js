import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"
import "./TitleSection.scss"

const TitleSection = ({ icon, title, image }) => {
  return (
    <div className="title">
      <div className="title__wrap">
        {icon ? <FontAwesomeIcon icon={icon} /> : <Img fluid={image} />}
        <span>{title}</span>
      </div>
    </div>
  )
}

export default TitleSection
