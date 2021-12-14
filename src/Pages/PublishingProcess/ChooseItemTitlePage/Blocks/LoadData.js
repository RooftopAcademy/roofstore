import { useState } from 'react'
import TextareaRowDynamic from '../Components/TextareaRowDynamic'
import RedirectBtn from '../Components/RedirectBtn'

export default function LoadData({
  title,
  placeholder,
  description,
  maxLength,
  inputType,
  buttonText,
  buttonUrl,
}) {

  const [ disableContinue, setDisableContinue ] = useState(true)

  if (!title) return console.error(`
    El componente <LoadData /> debe recibir un title como propiedad
  `)

  return (
    <>
      <div className={`
        col
        w-100
        ChooseItemTitle-p-3-bottom
        ChooseItemTitle-bg-light-primary
      `}>
        <p className="OffersPage-txt-b txt-center">{ title }</p>
      </div>

      <div className="row fd-col justify-content-sb SearchHelp-m-1-top grow-1">
        <div className="col padding-none w-100">
          <TextareaRowDynamic
            placeholder={placeholder}
            description={description}
            maxLength={maxLength}
            type={inputType}
            buttonText={buttonText}
            disableContinue={disableContinue}
            setDisableContinue={setDisableContinue}
          />
        </div>

        <div className="col padding-none w-100">
          <RedirectBtn
            disabled={ disableContinue }
            text={buttonText}
            url={buttonUrl}
          />
        </div>
      </div>
    </>
  )
}