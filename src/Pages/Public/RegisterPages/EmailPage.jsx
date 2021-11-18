
import DistractionFreeLayout from "../../../Layouts/DistractionFreeLayout";
import FormInput from "../../../Components/FormInput";


function EmailPage() {

    const title = 'Ingresá tu e-mail'
    const explication = 'Te enviaremos un mensaje para confirmarlo.'
    const buttonText = 'Enviar e-mail de confirmación'
    return (
        <DistractionFreeLayout className="fd-col" isFooter={false}>
            <div className="row">
                <div className="col w-100">
                    <h1 className="title m-top-1 m-bottom-2">{title}</h1>
                    <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                    <form className="d-flex fd-col">
                        <FormInput id="name-input" type="email" className="input round p-form m-bottom-5" />
                        <button className=" w-100 bg-blue txt-white p-form round txt-bold border-none fz-m">{buttonText}</button>
                    </form>
                </div>
            </div>
        </DistractionFreeLayout>
    )
}
export default EmailPage;