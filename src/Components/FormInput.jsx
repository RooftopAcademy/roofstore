import { useState } from "react"
import TextLine from "./TextLine"

function FormInput({ holderText, className, type, holderBottom }) {
    const types = ['text', 'password', 'number', 'email']

    const [selectInput, setSelectInput] = useState(false)


    if (types.includes(type)) {
        return <div>
            <input
                type={type}
                className={`${className} ${selectInput ? 'selected' : ''}`}
                placeholder={holderText}
                onFocus={() => setSelectInput(!selectInput)}
                onBlur={() => setSelectInput(!selectInput)}
            />
            <div className="fz-sm txt-grey-copyright m-left-0">{holderBottom}</div>
        </div>
    }
}

export default FormInput;