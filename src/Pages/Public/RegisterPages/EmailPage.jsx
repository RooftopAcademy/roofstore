
import FormInput from "../../../Components/FormInput";



function EmailPage({ optionActive, className, setOptionActive }) {

    const title = 'Ingresá tu e-mail'
    const explication = 'Te enviaremos un mensaje para confirmarlo.'
    const buttonText = 'Enviar e-mail de confirmación'
    return (
        <div className={`row ${className}`}>
            <div className="col w-100">
                <h1 className="title m-top-1 m-bottom-2">{title}</h1>
                <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                <form className="d-flex fd-col">
                    <FormInput id="email-input" type="email" className="input round p-form m-bottom-5" />
                    <button type="button" onClick={() => { setOptionActive(optionActive++) }} className=" w-100 bg-blue txt-white p-form round txt-bold border-none fz-m">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}
export default EmailPage;