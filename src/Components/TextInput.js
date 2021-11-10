
function TextInput({ holderText, classes }) {
    return <input
        type="text"
        className={classes}
        placeholder={holderText} />
}

export default TextInput