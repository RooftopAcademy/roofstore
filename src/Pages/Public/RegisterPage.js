import { useState } from "react"
import DistractionFreeLayout from "../../Layouts/DistractionFreeLayout"
import ValidateOption from "./RegisterPages/ValidateOption"
import EmailPage from "./RegisterPages/EmailPage"
import DataPage from "./RegisterPages/DataPage"
import PasswordPage from "./RegisterPages/PasswordPage"
import MobilePage from "./RegisterPages/MobilePage"

function RegisterPage() {

    const optionInfoEmail = {
        text: 'Validar e-mail',
        subText: 'Lo usarás para recuperar tu cuenta.',
        icon: 'envelope',
        to: 'register/email'
    }

    const optionInfoData = {
        text: 'Confirmar tu identidad',
        subText: 'Accede a los beneficios RoofStore.',
        icon: 'dni',
        to: 'register/data'
    }

    const optionInfoMobile = {
        text: 'Validar teléfono',
        subText: 'Servirá para ingresar a tu cuenta.',
        icon: 'cell-phone',
        to: 'register/pass'
    }

    const optionInfoPass = {
        text: 'Crear contraseña',
        subText: 'Servirá para ingresar a tu cuenta.',
        icon: 'lock',
        to: 'register/pass'
    }




    let [optionActive, setOptionActive] = useState(1)

    return (
        <DistractionFreeLayout isFooter={false} >

            <div className={`row ${optionActive % 2 !== 0 ? '' : 'd-none'}`}>
                <div className="col">
                    <div className="title txt-bold m-bottom-2 ">Tus datos</div>
                    <div className="m-bottom-5 "> Validá tus datos para que nadie pueda ingresa o crear una cuenta a tu nombre.</div>
                    <ValidateOption info={optionInfoEmail} active={optionActive === 1} optionActive={optionActive} setOptionActive={setOptionActive} />
                    <ValidateOption info={optionInfoData} active={optionActive === 3} optionActive={optionActive} setOptionActive={setOptionActive} />
                    <ValidateOption info={optionInfoMobile} active={optionActive === 5} optionActive={optionActive} setOptionActive={setOptionActive} />
                    <ValidateOption info={optionInfoPass} active={optionActive === 7} optionActive={optionActive} setOptionActive={setOptionActive} />
                </div>
            </div>

            <div >
                <EmailPage className={optionActive === 2 ? '' : 'd-none'} setOptionActive={setOptionActive} optionActive={optionActive} />
                <DataPage className={optionActive === 4 ? '' : 'd-none'} setOptionActive={setOptionActive} optionActive={optionActive} />
                <MobilePage className={optionActive === 6 ? '' : 'd-none'} setOptionActive={setOptionActive} optionActive={optionActive} />
                <PasswordPage className={optionActive === 8 ? '' : 'd-none'} setOptionActive={setOptionActive} optionActive={optionActive} />
            </div>

        </DistractionFreeLayout>
    )
}

export default RegisterPage