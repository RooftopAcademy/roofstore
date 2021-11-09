
function TextLink({children, url}) {
    return <a className="link link-color" href={url}>{children}</a>
}

export default TextLink