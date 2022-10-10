import React from "react"
import "./TitleSection.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleSection = ({ icon, title }) => {
  return (
    <div className="title">
      <div className="title__wrap">
        <FontAwesomeIcon icon={icon} />
        <span>{title}</span>
      </div>
    </div>
  )
}

export default TitleSection
