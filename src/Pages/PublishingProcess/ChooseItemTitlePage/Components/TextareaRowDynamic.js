import { useState } from 'react'

export default function TextareaRowDynamic({
  placeholder,
  description = '',
  maxLength = 60,
  type = 'text',
  disableContinue = '',
  setDisableContinue = ()=>{},
}) {
  const [ valueLength, setValueLength ] = useState(0)
  const [ rows, setRows ] = useState(1)
  const maxCharInARow = 45

  const checkInput = (length) => {
    if (length === 0 && disableContinue === false) {
      setDisableContinue(true)
    }
    if (length > 0 && disableContinue === true) {
      setDisableContinue(false)
    }
  }

  const checkRows = (currentValue, limitValue) => {
    if (currentValue > limitValue && rows === 1) {
      setRows(2)
    }
    if (currentValue < limitValue && rows === 2) {
      setRows(1)
    }
  }

  const handleInput = (e) => {
    const inputValueLength = e.target.value.length
    checkInput(inputValueLength)
    setValueLength(inputValueLength)
    checkRows(inputValueLength, maxCharInARow)
  }

  return (
    <>
      <textarea
        className={`
          w-100
          ChooseItemTitle-resize-none
          SearchHelp-border-none
          ChooseItemTitle-border-blue-bottom
          ChooseItemTitle-placeholder-gray
          ConfirmClassification-txt-mb 
        `}
        type={type}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleInput}
      ></textarea>

      <div className="row padding-none">
        <div className="col padding-none">
          <p className="OffersPage-txt-light-grey">{ description }</p>
        </div>
        <div className="col padding-none">
          <p className="OffersPage-txt-light-grey">
            { valueLength } / { maxLength }
          </p>
        </div>
      </div>
    </>
  )
}
