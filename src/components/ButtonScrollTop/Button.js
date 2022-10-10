import React, { useState } from "react"
import { Link } from "react-scroll"
import {} from "@fortawesome/free-brands-svg-icons"
import "./Button.scss"

const Button = () => {
  const [state, setState] = useState(false)
  window.onscroll = function () {
    scrollFunction()
  }
  //Visible Button ScrollTop when user scroll

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setState(true)
    } else setState(false)
  }

  return (
    <>
      <Link to="banner" spy={true} smooth={true} offset={0} duration={500}>
        <div className={state ? "btnScroll active" : "btnScroll"}>
          <span>&#8743;</span>
        </div>
      </Link>
    </>
  )
}

export default Button
