import FormInput from "../../../Components/FormInput";

function SingleInputRegisterPage({ optionActive, className, setOptionActive, title, explication, buttonText, holder = '', formInputId }) {
    return (
        <div className={`row ${className}`}>
            <div className="col w-100">
                <h1 className="title m-top-1 m-bottom-2">{title}</h1>
                <p className="fz-sm txt-grey-copyright m-bottom-5">{explication}</p>
                <form className="d-flex fd-col">
                    <FormInput id={formInputId} type="text" className="input round p-form" holderBottom={holder} />
                    <button type="button" onClick={() => { setOptionActive(optionActive + 1) }} className=" m-top-5 bg-blue txt-white p-form round txt-bold border-none fz-m">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default SingleInputRegisterPage