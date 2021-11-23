import FormInput from '../../../Components/FormInput'

function DataForm({ optionActive, setOptionActive }) {

    const buttonText = 'Continuar'
    const labelName = 'Nombre/s'
    const labelLastName = 'Apellido/s'
    const labelDni = 'Documento'
    const holderDni = 'Escribí solo números, sin puntos ni guiones'

    return (
        <div className="row padding-none">
            <div className="col w-100 padding-none">
                <form className="d-flex fd-col">
                    <label className="fz-sm m-left-0" htmlFor="name-input">{labelName}</label>
                    <FormInput id="name-input" type="text" className="input round p-form m-bottom-5"></FormInput>
                    <label className="fz-sm m-left-0" htmlFor="name-input">{labelLastName}</label>
                    <FormInput id="lastName-input" type="text" className="input round p-form m-bottom-5"></FormInput>
                    <label className="fz-sm m-left-0" htmlFor="dni-input">{labelDni}</label>
                    <FormInput id="dni-input" type="number" holderBottom={holderDni} className="input round p-form "></FormInput>
                    <button type="button" onClick={() => setOptionActive(optionActive++)} className="bg-blue txt-white p-form round txt-bold border-none fz-m m-top-5">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default DataForm;