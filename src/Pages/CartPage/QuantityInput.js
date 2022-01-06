import {useState} from 'react'

export default function QuantityInput({setQty}) {
    const [ isInputFocused, setIsInputFocused ] = useState(false) // !

    const handleFocusInput = () => setIsInputFocused(!isInputFocused)

    return (
        <input
        name="submodalInput"
        required={true}
        type="number"
        min="1"
        placeholder="Ingresar cantidad"
        className={`
          w-100
          SearchHelp-placeholder-light-gray
          ConfirmClassification-b-none
          ${isInputFocused
            ? 'ChooseItemTitle-border-blue-bottom'
            : 'Modal-border-bottom-grey'
          }
          OffersPage-m-bottom
          SearchHelp-m-3-top
        `}
        onChange={setQty}
        onFocus={handleFocusInput}
        onBlur={handleFocusInput}
      />
    )
}