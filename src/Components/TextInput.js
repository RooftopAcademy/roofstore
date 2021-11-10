
function TextInput({ holderText, className }) {
    return <input
        type="text"
        className={className}
        placeholder={holderText} />
}

export default TextInput