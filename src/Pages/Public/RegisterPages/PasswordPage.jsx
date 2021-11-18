
import DistractionFreeLayout from "../../../Layouts/DistractionFreeLayout";
import FormInput from "../../../Components/FormInput";
import PasswordRequirement from "./PasswordRequirement";

function PasswordPage() {

    const title = 'Creá tu contraseña'
    const explication = 'Ingresá una contraseña segura que no uses en otras plataformas.'
    const labelPass = 'Ingresá tu contraseña'
    const labelConfirm = 'Confirmá tu contraseña'
    const buttonText = 'Continuar'
    const req1 = 'Mínimo de 8 caracteres con letras y números.'
    const req2 = 'Mínimo 1 signo o símbolo como ?-!*$#.'
    const req3 = 'No incluyas tu nombre o apellido.'
    const req4 = 'Sin caracteres repetidos consecutivos como aa.'
    const req5 = 'Sin tu e-mail, ni "roofstore".'

    return (
        <DistractionFreeLayout className="fd-col" isFooter={false}>
            <div className="row d-flex ai-start display-none">
                <div className="col display-none">
                    <h1 className="title m-top-1 m-bottom-1">{title}</h1>
                    <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                    <form className="d-flex fd-col">
                        <label className="fz-sm m-left-0" htmlFor="name-input">{labelPass}</label>
                        <FormInput id="name-input" type="password" className="input round p-form m-bottom-0" />
                        <PasswordRequirement text={req1} />
                        <PasswordRequirement text={req2} />
                        <PasswordRequirement text={req3} />
                        <PasswordRequirement text={req4} />
                        <PasswordRequirement text={req5} />
                        <label className="fz-sm m-left-0 m-top-5" htmlFor="name-input">{labelConfirm}</label>
                        <FormInput id="name-input" type="password" className="input round p-form m-bottom-5" />
                        <div>
                            <button className=" w-100 bg-blue txt-white p-form round txt-bold border-none fz-m">{buttonText}</button>
                        </div>
                    </form>
                </div>
            </div>
        </DistractionFreeLayout>
    )
}
export default PasswordPage;