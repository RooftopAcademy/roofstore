import { useState } from "react"
import DistractionFreeLayout from "../../Layouts/DistractionFreeLayout"
import ValidateOption from "./RegisterPages/ValidateOption"
import EmailPage from "./RegisterPages/EmailPage"
import DataPage from "./RegisterPages/DataPage"
import PasswordPage from "./RegisterPages/PasswordPage"
import MobilePage from "./RegisterPages/MobilePage"

function RegisterPage() {
  let [optionActive, setOptionActive] = useState(1)

  const optionInfo = {
    email: {
      text: "Validar e-mail",
      subText: "Lo usarás para recuperar tu cuenta.",
      icon: "envelope",
      to: "register/email",
      isActive: 1,
    },
    data: {
      text: "Confirmar tu identidad",
      subText: "Accede a los beneficios RoofStore.",
      icon: "dni",
      to: "register/data",
      isActive: 3,
    },
    mobile: {
      text: "Validar teléfono",
      subText: "Servirá para ingresar a tu cuenta.",
      icon: "cell-phone",
      to: "register/pass",
      isActive: 5,
    },
    pass: {
      text: "Crear contraseña",
      subText: "Servirá para ingresar a tu cuenta.",
      icon: "lock",
      to: "register/pass",
      isActive: 7,
    },
  }

  const componentToRender = {
    email: (
      <EmailPage
        key={"emailPage"}
        className={optionActive === 2 ? "" : "d-none"}
        setOptionActive={setOptionActive}
        optionActive={optionActive}
      />
    ),
    data: (
      <DataPage
        key={"dataPage"}
        className={optionActive === 4 ? "" : "d-none"}
        setOptionActive={setOptionActive}
        optionActive={optionActive}
      />
    ),
    mobile: (
      <MobilePage
        key={"mobilePage"}
        className={optionActive === 6 ? "" : "d-none"}
        setOptionActive={setOptionActive}
        optionActive={optionActive}
      />
    ),
    password: (
      <PasswordPage
        key={"passwordPage"}
        className={optionActive === 8 ? "" : "d-none"}
        setOptionActive={setOptionActive}
        optionActive={optionActive}
      />
    ),
  }

  return (
    <DistractionFreeLayout isFooter={false}>
      <div className={`row ${optionActive % 2 !== 0 ? "" : "d-none"}`}>
        <div className="col">
          <div className="title txt-bold m-bottom-2 ">Tus datos</div>
          <div className="m-bottom-5 ">
            {" "}
            Validá tus datos para que nadie pueda ingresa o crear una cuenta a
            tu nombre.
          </div>

          {Object.keys(optionInfo).map((key) => {
            return (
              <ValidateOption
                key={key}
                info={optionInfo[key]}
                active={optionActive === optionInfo[key].isActive}
                optionActive={optionActive}
                setOptionActive={setOptionActive}
              />
            )
          })}
        </div>
      </div>

      <div>
        {Object.keys(componentToRender).map((key) => componentToRender[key])}
      </div>
    </DistractionFreeLayout>
  )
}

export default RegisterPage
