import { useState } from "react"
import DistractionFreeLayout from "../../Layouts/DistractionFreeLayout"
import TextLine from "../../Components/TextLine"
import FormInput from "../../Components/FormInput"
import TextLink from "../../Components/TextLink"
import useAuth from '../../hooks/useAuth'

function RegisterPage() {

  const {signup, error} = useAuth()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(credentials)
  }

  const title = "Creá tu cuenta"
  const description = "Registrate para disfrutar de todos los beneficios que tiene Roofstore para vos"
  const labelEmailText = 'E-mail'
  const labelPasswordText = 'Contraseña'
  const labelConfirmPasswordText = 'Confirmar contraseña'
  const createAccountButtonText = 'Crear cuenta'
  const alreadyHaveAccountText = '¿Ya tenés una cuenta?'
  const sigInText = 'Ingresá'

  return (
    <DistractionFreeLayout isFooter={false}>
      <div className="container grow-1 d-flex fd-col">
        <div className="row grow-1 ai-start">
          <div className="col padding-none">
            <TextLine text={title} className="HomePage-fs-20 txt-bold HomePage-txt-start m-bottom-2" />
            <TextLine text={description} className="HomePage-txt-start" />

            <form className="d-flex fd-col padding-none m-top-5" onSubmit={handleSubmit} >

              <label className="fz-sm m-left-0" htmlFor="register-email">{labelEmailText}</label>
              <FormInput name="email" id="register-email" type="email" className="input round p-form" onChange={handleInput} />

              <label className="fz-sm m-left-0 m-top-0" htmlFor="register-password">{labelPasswordText}</label>
              <FormInput name="password" id="register-password" type="password" className="input round p-form" onChange={handleInput} />

              <label className="fz-sm m-left-0 m-top-0" htmlFor="register-confirm-password">{labelConfirmPasswordText}</label>
              <FormInput name="passwordConfirmation" id="register-confirm-password" type="password" className="input round p-form" onChange={handleInput} />

              <button className="bg-blue txt-white p-form round txt-bold border-none m-top-5 fz-m">{createAccountButtonText}</button>

              {error && 
                <div>{error.message}</div>
              }

            </form>
          </div>
        </div>
        <div className="row jc-center padding-none">
          <div className="col padding-none d-flex ">
            <TextLine text={alreadyHaveAccountText} className="HomePage-fs-14 txt-grey-copyright" />
            <TextLink url="/login" className="HomePage-fs-14 txt-blue m-left-0">{sigInText}</TextLink>
          </div>
        </div>
      </div>
    </DistractionFreeLayout>
  )
}

export default RegisterPage
