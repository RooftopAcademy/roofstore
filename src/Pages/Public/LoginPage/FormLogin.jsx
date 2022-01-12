import { useState } from 'react'
import FormInput from '../../../Components/FormInput'
import TextLink from '../../../Components/TextLink'
// import useFetch from '../../../hooks/useFetch'
// import { postLogin } from '../../../requests/login'

function FormLogin() {

    const [ loginData, setLoginData ] = useState({email: '', password: '' })

    // const { data: token } = useFetch({
    //     method: 'get', // TO DO: postLogin.method
    //     url: postLogin.url,
    //     data: loginData
    // })
    // console.log(token)

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)
        // TO DO fetch (POST /register)
    }

    const handleEmail = (e) => {
        e.preventDefault()
        setLoginData({...loginData, email: e.target.value})
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setLoginData({...loginData, password: e.target.value})
    }

    const buttonText = 'Continuar'
    const labelEmailText = 'Telefono, e-mail o usuario'
    const labelPasswordText = 'Contraseña'
    const linkCreateAccount = 'Crear cuenta'
    const urlRegistration = '/register'
    return (
        <div className="row padding-none">
            <div className="col w-100 padding-none">
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