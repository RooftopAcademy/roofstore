import {Link} from 'react-router-dom'

function TextLink({children, url, className="link-color" }) {
    return <Link className={`link ${className}`} to={url}>{children}</Link>
}

export default TextLink