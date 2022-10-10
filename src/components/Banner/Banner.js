import React, { useState } from "react"
import Card from "./Card/Card"
import { Link } from "react-scroll"
import "./Banner.scss"
import { graphql, useStaticQuery } from "gatsby"
import ButtonScrollTop from "../ButtonScrollTop/Button"
import Img from "gatsby-image"

const Banner = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const data = useStaticQuery(graphql`
    query HeaderBackground {
      headerBackground: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avt: file(relativePath: { eq: "avtPortfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <section id="banner" className="banner">
      <nav id="theMenu" className={toggleMenu ? "menu menu__open" : "menu"}>
        <div className="menu__wrap">
          <div className="logo__flat">
            <Img fluid={data.avt.childImageSharp.fluid} />
          </div>
          <br />
          <Link to="banner" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-user"></i>Home
          </Link>
          <Link to="description" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-dashboard"></i>About
          </Link>
          <Link to="education" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-graduation-cap"></i>Education
          </Link>
          <Link to="skill" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-sliders"></i>Skills
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-suitcase"></i>Experience
          </Link>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-archive"></i>Portfolios
          </Link>
          <Link to="interest" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-heart"></i>Interest
          </Link>
          <Link to="testimonial" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-users"></i>Testimonials
          </Link>
          <Link to="pricing" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa-regular fa-money-bill-1"></i>Pricing
          </Link>
          <Link to="blog" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-pencil-square"></i>Blog
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <i className="title__icon fa fa-envelope"></i>Contact
          </Link>
        </div>

        <div id="menuToggle" onClick={handleOpenMenu} className="">
          <div className="toggle__normal">
            <i className={`top__bar ${toggleMenu ? "top__transform" : ""}`}>
              &#8212;
            </i>
            <i
              className={`middle__bar ${toggleMenu ? "middle__transform" : ""}`}
            >
              &#8212;
            </i>
            <i
              className={`bottom__bar ${toggleMenu ? "bottom__transform" : ""}`}
            >
              &#8212;
            </i>
          </div>
        </div>
      </nav>
      <Card />
      <div className="header__background">
        <Img fluid={data.headerBackground.childImageSharp.fluid} />
      </div>
      <ButtonScrollTop />
    </section>
  )
}

export default Banner
