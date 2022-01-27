

import FormInput from "../../../Components/FormInput";
import PasswordRequirement from "./PasswordRequirement";


function PasswordPage({ optionActive, setOptionActive, className }) {

    const title = 'Creá tu contraseña'
    const explication = 'Ingresá una contraseña segura que no uses en otras plataformas.'
    const labelPass = 'Ingresá tu contraseña'
    const labelConfirm = 'Confirmá tu contraseña'
    const buttonText = 'Continuar'
    const requeriments = [
        {text: 'Mínimo de 8 caracteres con letras y números.'},
        {text: 'Mínimo 1 signo o símbolo como ?-!*$#.'},
        {text: 'No incluyas tu nombre o apellido..'},
        {text: 'Sin caracteres repetidos consecutivos como aa.'},
        {text: 'Sin tu e-mail, ni "roofstore".'},
    ]
    return (
        <div className={`row d-flex ai-start display-none ${className}`}>
            <div className="col display-none">
                <h1 className="title m-top-1 m-bottom-1">{title}</h1>
                <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                <form className="d-flex fd-col">
                    <label className="fz-sm m-left-0" htmlFor="name-input">{labelPass}</label>
                    <FormInput id="password-input" type="password" className="input round p-form m-bottom-0" />
                    { requeriments.map(requeriment => {
                        return <PasswordRequirement text={requeriment.text} />
                    })}
                    <label className="fz-sm m-left-0 m-top-5" htmlFor="name-input">{labelConfirm}</label>
                    <FormInput id="repeat-password-input" type="password" className="input round p-form m-bottom-5" />
                    <button type="button" className=" bg-blue txt-white p-form round txt-bold border-none fz-m m-top-1">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}
export default PasswordPage;