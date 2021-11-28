import { useState } from "react"

function InputItemTitle({ buttonText, placeholder, maxLength = 60, description = ''}) {
  const [ valueLength, setValueLength ] = useState(0)
  const [ rows, setRows ] = useState(1)
  
  const handleInput = (e) => {
    const inputValueLength = e.target.value.length
    const maxLengthInOneRow = 53
    setValueLength(inputValueLength)

    if (inputValueLength > maxLengthInOneRow) {
      setRows(2)
    } else {
      setRows(1)
    }
  }

  const isEmptyInput = valueLength ? true : false

  return (
    <>
      <div className="col padding-none w-100">
        <textarea
          className={`
            w-100
            ChooseItemTitle-resize-none
            SearchHelp-border-none
            ChooseItemTitle-border-blue-bottom
            ChooseItemTitle-placeholder-gray
            ConfirmClassification-txt-mb 
          `}
          type="text"
          rows={rows}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={handleInput}
          id="input-title-item"
        ></textarea>

        <div className="row padding-none">
          <div className="col padding-none">
            <p className="OffersPage-txt-light-grey">{ description }</p>
          </div>
          <div className="col padding-none">
            <p className="OffersPage-txt-light-grey">{ valueLength } / { maxLength }</p>
          </div>
        </div>
      </div>

      <div className="col padding-none w-100">
        <ConfirmBtn
          disabled={isEmptyInput ? false : true}
          text={buttonText}
        />
      </div>
    </>
  )
}

function ConfirmBtn({ text, disabled = false, className = '' }) {

  if (!text) return console.error('El componente <ConfirmBtn /> debe recibir un texto como propiedad')

  return (
    <button
      disabled={disabled}
      className={`
        bg-blue
        ChooseItemTitle-btn-disabled
        ConfirmClassification-b-none
        w-100
        txt-white
        p-0
        OffersPage-txt-b
        rounded
        ${className}
      `}
    >
      {text}
    </button>
  )
}

function ChooseItemTitle() {
  const maxLength = 60
  const buttonText = 'Continuar'
  const placeholderText = "Ej.: Celular Samsung Galaxy S9 64 GB negro"
  const descriptionText = "Evita incluir condiciones de venta."

  return (
    <main className="row fd-col justify-content-sb vh-100">
      <InputItemTitle
        description={descriptionText}
        placeholder={placeholderText}
        maxLength={maxLength}
        buttonText={buttonText}
      />
    </main>
  )
}

export default ChooseItemTitle