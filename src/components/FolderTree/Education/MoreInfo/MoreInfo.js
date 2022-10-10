import React from "react"
import "./MoreInfo.scss"
// import Image from "../../../../../../assets/images/more-infos.jpg";
const MoreInfo = ({ setState, state }) => {
  const handleClick = e => {
    if (e.target.id === "id01") {
      document.body.style.overflow = "unset"
      setState(false)
    }
  }

  const handleCloseClick = () => {
    document.body.style.overflow = "unset"
    setState(false)
  }

  return (
    <div
      onClick={handleClick}
      id="id01"
      className={state ? "modal active" : "modal"}
    >
      <div className="modal__content">
        <div className="more__content">
          <div onClick={handleCloseClick} className="more__close">
            <i className="fa fa-close"></i>
          </div>
          <h4 className="more__title">graduation at ashton uni</h4>
          <p className="more__time">Jan 2014 - Mar 2015</p>
          <figure>{/* <img src={Image} alt="More Info" /> */}</figure>
          <p className="more__description">
            I have learned a great many things from participating in varsity
            football. It has changed my entire outlook on and attitude toward
            life. Before my freshman year at [high-school], I was shy, had low
            self-esteem and turned away from seemingly impossible challenges.
            Football has altered all of these qualities. On the first day of
            freshman practice, the team warmed up with a game of touch football.
            The players were split up and the game began. However, during the
            game, I noticed that I didn't run as hard as I could, nor did I try
            to evade my defender and get open. The fact of the matter is that I
            really did not want to be thrown the ball. I didn't want to be the
            one at fault if I dropped the ball and the play didn't succeed. I
            did not want the responsibility of helping the team because I was
            too afraid of making a mistake. That aspect of my character led the
            first years of my high school life. All the while, I went to
            practice.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
