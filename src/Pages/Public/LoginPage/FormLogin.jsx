import FormInput from '../../../Components/FormInput'
import TextLink from '../../../Components/TextLink'

function FormLogin() {

    const buttonText = 'Continuar'
    const labelText = 'Telefono, e-mail o usuario'
    const linkCreateAccount = 'Crear cuenta'
    const urlRegistration = '/register'
    return (
        <div className="row padding-none">
            <div className="col w-100 padding-none">
                <form className="d-flex fd-col">
                    <label className="fz-sm m-left-0" htmlFor="login-input">{labelText}</label>
                    <FormInput id="login-input" type="text" className="input round p-form"></FormInput>
                    <button className="bg-blue txt-white p-form round txt-bold border-none m-bottom-2 m-top-4 fz-m">{buttonText}</button>
                    <TextLink className="txt-center txt-blue" url={urlRegistration}>{linkCreateAccount}</TextLink>
                </form>
            </div>
        </div>
    )
}

export default FormLogin