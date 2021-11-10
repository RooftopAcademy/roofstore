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
        content = (<p className={'texttag-p'} >{text}</p>)
    }

    return (
        <div
            className={'texttag-container ' + txtColor + ' txt-bold ' + bgColor}
        >
            {content}
        </div>
    )
}

export default TextTag