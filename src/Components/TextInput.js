function TextInput({ holderText, className, type = 'text', }) {
    const types = ['text', 'password', 'number', 'email']

    if (types.includes(type)) {
        return <input type={type} className={className} placeholder={holderText} />
    }
}

export default TextInput