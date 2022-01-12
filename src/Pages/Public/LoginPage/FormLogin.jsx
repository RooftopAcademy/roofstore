import { useState } from 'react'
import FormInput from '../../../Components/FormInput'
import TextLink from '../../../Components/TextLink'
import useAuth from '../../../hooks/useAuth'

function FormLogin(props) {
    const {signin, error} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        signin({email, password})
    }

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const buttonText = 'Continuar'
    const labelEmailText = 'Telefono, e-mail o usuario'
    const labelPasswordText = 'Contraseña'
    const linkCreateAccount = 'Crear cuenta'
    const urlRegistration = '/register'

    return (
        <div className="row padding-none">
            <div className="col w-100 padding-none">
                <div>
                    {error ? error.message : ""}
                </div>

                <form className="d-flex fd-col" onSubmit={handleSubmit}>

                    <label className="fz-sm m-left-0" htmlFor="login-email">{labelEmailText}</label>
                    <FormInput name="email" onChange={handleEmail} id="login-email" type="email" className="input round p-form"></FormInput>

                    <label className="fz-sm m-left-0" htmlFor="login-password">{labelPasswordText}</label>
                    <FormInput name="password" onChange={handlePassword} id="login-password" type="password" className="input round p-form"></FormInput>

                    <button className="bg-blue txt-white p-form round txt-bold border-none m-bottom-2 m-top-4 fz-m">{buttonText}</button>
                    <TextLink className="txt-center txt-blue" url={urlRegistration}>{linkCreateAccount}</TextLink>
                </form>
            </div>
        </div>
    )
}

export default FormLogin