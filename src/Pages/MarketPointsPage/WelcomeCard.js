import React from "react";
import Icon from "../../Components/Icon";

function WelcomeCard ({closeWelcome}) {
  return(
    <div className="MenuMobile-p-1-horizontal m-top-5">
      <div className="row bg-white rounded OffersPage-p-relative shadow-m d-flex ai-start">
        <div className="col d-flex padding-none">
          <div className="">
            <Icon icon="trophy" className="fz-l color-primary m-top-0" />
          </div>
          <div className="m-left-5">
            <p className="">¡Te damos la bienvenida a Roofstore Puntos!</p>
            <p className="link-color fz-sm">
              Conocé cómo funciona
              <Icon icon="arrow-right" className="m-left-0"/>
            </p>
          </div>
        </div>
        <div>
          <Icon dataTestId="close-welcome" icon="x" className="ProductPage-txt-light-grey" onClick={closeWelcome} />
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard