import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// import EmailIcon from "@mui/icons-material/Email"
// import LanguageIcon from "@mui/icons-material/Language"
// import CallIcon from "@mui/icons-material/Call"
// import LocationOnIcon from "@mui/icons-material/LocationOn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faFacebook,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import "./Card.scss"

const Card = () => {
  const data = useStaticQuery(graphql`
    query Avatar {
      avatar: file(relativePath: { eq: "avtPortfolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentData: markdownRemark(frontmatter: { slug: { eq: "card" } }) {
        frontmatter {
          title
          website
          telephone
          name
          skype
          email
          carrer
          address
        }
      }
    }
  `)
  const { address, carrer, email, name, skype, telephone, website } =
    data.contentData.frontmatter

  return (
    <section className="card animated">
      <div className="container">
        {/* <div className="card__wrap box__shadow "> */}
        <div className="card__wrap box__shadow">
          <div className="card__content">
            <div className="card__name">
              <h4>{name}</h4>
              <h6>{carrer}</h6>
            </div>
            <div className="card__infos">
              <ul className="infos__list">
                <li>
                  {/* <EmailIcon /> */}
                  {/* <FontAwesomeIcon icon={faMailchimp} /> */}
                  <span>{email}</span>
                </li>
                <li>
                  {/* <LanguageIcon /> */}
                  <span>{website}</span>
                </li>
                <li>
                  <i className="fa-brands fa-skype"></i>
                  <span>
                    <a href="https://join.skype.com/invite/xZFCGR1NBK20">
                      {skype}
                    </a>
                  </span>
                </li>
                <li>
                  {/* <CallIcon /> */}
                  <span>{telephone}</span>
                </li>
                <li>
                  {/* <LocationOnIcon /> */}
                  <span>{address}</span>
                </li>
              </ul>
            </div>
            <div className="card__icon">
              <a
                href="https://www.facebook.com/profile.php?id=100015533373382"
                className="icon__fb"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/hoabui1907" className="icon__tw">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://contacts.google.com/?hl=vi" className="icon__gg">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href="https://www.linkedin.com/in/h%C3%B3a-b%C3%B9i-080768234/"
                className="icon__in"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://contacts.google.com/?hl=vi" className="icon__wf">
                &#9850;
              </a>
            </div>
          </div>
          <div className="triangle"></div>
          <button className="btn__plus">
            <span>+</span>
          </button>
          <figure className="avatar">
            <Img fluid={data.avatar.childImageSharp.fluid} objectFit="cover" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Card
