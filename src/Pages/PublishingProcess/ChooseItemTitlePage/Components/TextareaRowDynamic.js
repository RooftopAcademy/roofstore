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
  const rows = 1

  const checkInput = (length) => {
    if (length === 0 && disableContinue === false) {
      setDisableContinue(true)
    }
    if (length > 0 && disableContinue === true) {
      setDisableContinue(false)
    }
  }

  const checkGrow = (el) => {
    el.style.height = "5px";
    el.style.height = (el.scrollHeight)+"px";
  }

  const handleInput = (e) => {
    const inputValueLength = e.target.value.length
    checkInput(inputValueLength)
    setValueLength(inputValueLength)
    checkGrow(e.target)
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
          HomePage-overflow-hidden
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
          <p className="OffersPage-txt-light-grey character-limit-test">
            { valueLength } / { maxLength }
          </p>
        </div>
      </div>
    </>
  )
}
