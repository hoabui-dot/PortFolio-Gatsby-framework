import React, { useState, useEffect } from "react"
import Banner from "../components/Banner/Banner"
import Description from "../components/Description/Description"
import Education from "../components/FolderTree/Education/Education"
import Testimonials from "../components/Testimonials/Testimonials"
import Skills from "../components/Skills/Skills"
import ColorPalate from "../components/ChangeColor/ChangeColor"
import Blog from "../components/Blog/Blog"
import "../App.scss"

const Home = () => {
  const [isColor, setIsColor] = useState("green")

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animated")) {
              if (entry.target.classList.contains("animateBanner")) {
                entry.target.classList.add("fadeBanner")
              } else {
                entry.target.classList.add("fade")
              }
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    document.querySelectorAll(".animated").forEach(ele => {
      observer.observe(ele)
    })
  }, [])

  return (
    <div className={isColor}>
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Testimonials />
      <ColorPalate setIsColor={setIsColor} />
      <Blog />
    </div>
  )
}

export default Home
