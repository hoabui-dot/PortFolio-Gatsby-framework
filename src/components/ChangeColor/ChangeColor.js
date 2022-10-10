import React, { useState } from "react"
import "./ChangeColor.scss"
import { faGgCircle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ColorPalate = ({ setIsColor }) => {
  const [toggleColor, setToggleColor] = useState(false)

  const handleChangeColor = e => {
    setIsColor(e.target.id)
  }

  return (
    <div id="color__palate" className={toggleColor ? "popOut open" : "popOut"}>
      <button
        id="color__toggle"
        onMouseDown={() => setToggleColor(!toggleColor)}
        className="toggle text__center"
      >
        <FontAwesomeIcon icon={faGgCircle} />
      </button>
      <div className="colors text__center">
        <p className="text__center">Pick a Color</p>
        <div>
          <button
            value="blue"
            onMouseDown={e => handleChangeColor(e)}
            id="blue"
            className="color1"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="teal"
            className="color2"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="gray"
            className="color3"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="green"
            className="color4"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="purple"
            className="color5"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="brown"
            className="color6"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="red"
            className="color7"
          >
            {" "}
          </button>
          <button
            onMouseDown={e => handleChangeColor(e)}
            id="pink"
            className="color8"
          >
            {" "}
          </button>
        </div>
        <p className="text__center">Blend &amp; Dark</p>
        <div>
          <button id="blue__blend" className="color1">
            {" "}
          </button>
          <button id="green__blend" className="color4">
            {" "}
          </button>
          <button
            onMouseDown={handleChangeColor}
            id="white"
            className="color10"
          >
            {" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ColorPalate
