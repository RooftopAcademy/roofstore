import TextInput from '../../../Components/TextInput'
import TextLink from '../../../Components/TextLink'
import { useState } from 'react'

function FormLogin() {
    const [selectInput, setSelectInput] = useState(false)
    const buttonText = 'Continuar'
    const labelText = 'Telefono, e-mail o usuario'
    const linkCreateAccount = 'Crear cuenta'
    const urlRegistration = '/register'
    return (
        <div className="row padding-none ai-start">
            <div className="col w-100 padding-none">
                <form className="d-flex fd-col">
                    <label className="fz-sm m-left-0" htmlFor="login-input">{labelText}</label>
                    <TextInput id="login-input" onFocus={() => setSelectInput(!selectInput)} onBlur={() => setSelectInput(!selectInput)} className={`input round p-form m-bottom-2 ${selectInput ? 'selected' : ''}`}></TextInput>
                    <button className="bg-blue txt-white p-form round txt-bold border-none m-bottom-2 m-top-2 fz-m">{buttonText}</button>
                    <TextLink className="txt-center txt-blue" url={urlRegistration}>{linkCreateAccount}</TextLink>
                </form>
            </div>
        </div>
    )
}

export default FormLogin