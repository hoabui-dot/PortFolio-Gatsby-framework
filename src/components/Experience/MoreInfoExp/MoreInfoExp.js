import React from "react";
import "../../Education/MoreInfo/MoreInfo.scss";

const MoreInfoExp = ({ setState, state }) => {
  const handleCloseClick = e => {
    if (e.target.id === "id01") {
      document.body.style.overflow = "unset";
      setState(false);
    }
  };
  const handleCloseButton = () => {
    document.body.style.overflow = "unset";
    setState(false);
  };
  return (
    <div
      onClick={handleCloseClick}
      id='id01'
      className={state ? "modal active" : "modal"}
    >
      <div className='modal__content'>
        <div className='more__content'>
          <div onClick={handleCloseButton} className='more__close'>
            <i className='fa fa-close'></i>
          </div>
          <h4 className='more__title'>EXPERIENCE AT Z</h4>
          <p className='more__time'>Jan 2014 - Mar 2015</p>
          <p className='more__description'>
            I have learned a great many things from participating in varsity
            football. It has changed my entire outlook on and attitude toward
            life. Before my freshman year at [high-school], I was shy, had low
            self-esteem and turned away from seemingly impossible challenges.
            Football has altered all of these qualities. On the first day of
            freshman practice, the team warmed up with a game of touch football.
            The players were split up and the game began. However,
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoExp;
