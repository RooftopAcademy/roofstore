import {Link} from 'react-router-dom'

function TextLink({children, url, className="link-color" }) {

    if (url) {
        return (
            <Link className={`link ${className}`} to={url}>
                {children}
            </Link>
        )
    }
    
    console.error('El componente <TextLink /> deber recibir una url como propiedad')
    
    return (<div>{children}</div>)
}

export default TextLink