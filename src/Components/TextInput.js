
function TextInput({ holderText, className, onFocus, onBlur, type = 'text' }) {
    let types = ['text', 'password', 'number', 'email']

    if (types.includes(type)) {
        return <input
            type={type}
            className={className}
            placeholder={holderText}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    }
}

export default TextInput