import TextInput from '../../../Components/TextInput'
import TextLink from '../../../Components/TextLink'

function FormLogin() {
    return (
        <div className="row padding-none ai-start">
            <div className="col w-100 padding-none">
                <form className=" login-flex fd-col">
                    <label className="fz-sm m-left-0" htmlFor="login-input">Telefono, e-mail o usuario</label>
                    <TextInput id="login-input" className={"input rounded p-form m-bottom-2"}></TextInput>
                    <button className="bg-blue txt-white p-form rounded txt-bold border-none m-bottom-2 m-top-2">Continuar</button>
                    <TextLink className="txt-center" url={"/register"}>Crear Cuenta</TextLink>
                </form>
            </div>
        </div>
    )
}

export default FormLogin