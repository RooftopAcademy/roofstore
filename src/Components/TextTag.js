/**
 * Example: "OFERTA DEL DIA"
 */
import TextLink from './TextLink'

function TextTag({
    text = '',
    url = null,
    txtColor = 'txt-white',
    bgColor = 'bg-blue',
}) {

    let content

    if (url) {
        content = (<TextLink className={txtColor} url={url}>{text}</TextLink>)
    } else {
        content = (<p style={{fontSize: '12px',}} >{text}</p>)
    }

    return (
        <div
            className={txtColor + ' txt-bold ' + bgColor}
            style={{
                display: 'inline-flex',
                padding: '3px 4px',
                borderRadius: '3px',
                fontSize: '10px',
                lineHeight: '1em',
                verticalAlign: 'middle',
            }}
        >
            {content}
        </div>
    )
}

export default TextTag