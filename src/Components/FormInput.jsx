import { useState } from "react"

function FormInput({ 
    name = '',
    holderBottom = '',
    id,
    type,
    required = false,
    holderText,
    className,
    onChange,
    value
}) {
    const types = ['text', 'password', 'number', 'email']

    const [selectInput, setSelectInput] = useState(false)

    if (types.includes(type)) {
        return <div>
            <input
                id={id}
                type={type}
                className={`${className} ${selectInput ? 'selected' : ''}`}
                placeholder={holderText}
                onFocus={() => setSelectInput(!selectInput)}
                onBlur={() => setSelectInput(!selectInput)}
                onChange={onChange}
                value={value}
                required={required}
                name={name}
            />    
            {holderBottom &&
            <div className="fz-sm txt-grey-copyright m-left-0">{holderBottom}</div>
            }
        </div>
    }
}

export default FormInput;