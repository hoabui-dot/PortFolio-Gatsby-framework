import React from "react"
import TitleSection from "../TitleSection/TitleSection"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "./Testimonials.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query Testimonials {
      markdownRemark(frontmatter: { slug: { eq: "testimonial" } }) {
        frontmatter {
          client1 {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          client2 {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          client3 {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author
          desc1
          desc2
          desc3
        }
      }
    }
  `)

  const {
    firstClient = data.markdownRemark.frontmatter.client1.childImageSharp.fluid,
    senconClient = data.markdownRemark.frontmatter.client2.childImageSharp
      .fluid,
    thirdClient = data.markdownRemark.frontmatter.client3.childImageSharp.fluid,
    author,
    desc1,
    desc2,
    desc3,
  } = data.markdownRemark.frontmatter

  return (
    <section id="testimonial" className="testimonial animated">
      <div className="container">
        <TitleSection title="testimonials" icon={faPinterest} />
        <div className="testimonial__wrap">
          <Swiper
            autoHeight={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            speed={1000}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <figure className="item__image">
                  <Img fluid={firstClient} />
                </figure>
                <div className="item__content">
                  <p>{desc1}</p>
                  <p>{author}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <figure className="item__image">
                  <Img fluid={senconClient} />
                </figure>
                <div className="item__content">
                  <p>{desc2}</p>
                  <p>{author}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <figure className="item__image">
                  <Img fluid={thirdClient} />
                </figure>
                <div className="item__content">
                  <p>{desc3}</p>
                  <p>{author}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
