import React from "react"
import "./EduBox.scss"

export const SetHeight = React.createContext()

const EduBox = ({ eduData, flip, setState }) => {
  const { title, description, time, keyword, school } = eduData

  return (
    <>
      <div className={`eduBox__item ${flip}`}>
        <div className="item__content">
          <div className="eduBox__job animated">
            <p className="job__name">{title}</p>
            <p className="job__subTitle">{school}</p>
            <p className="job__time">{time}</p>
            <p className="job__desc">{description}</p>
          </div>
          <div className="item__key ">
            <span>{keyword}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default EduBox
