import React from "react";
import Icon from "../../Components/Icon";

const levelText = "Estás en el nivel 1"
const progressText = "Ver progreso"

function LevelCart () {
  return(
    <div className="row bg-white rounded OffersPage-p-relative shadow-m">
      <div className="col d-flex padding-none">
        <div>
          <img src="/user-avatar.png" alt="Imagen perfil en blanco" width='60px'/>
        </div>
        <div className="m-left-5">
          <p className="ProductPage-fs-18 txt-bold">{levelText}</p>
          <p className="link-color fz-sm">{progressText}</p>
        </div>
      </div>
      <div>
        <Icon icon="arrow-right" className="ProductPage-txt-light-grey fz-l"/>
      </div>
    </div>
  )
}

export default LevelCart