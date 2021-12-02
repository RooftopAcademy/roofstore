import TextLink from "../../../../Components/TextLink"

export default function TextTag({
  text = '',
  url = null,
  txtColor = 'txt-white',
  bgColor = 'bg-blue',
}) {

  if (!text) return console.error(
    'El componente <TextTag /> debe recibir un texto en la propiedad "text"'
  )

  let content

  if (url) {
    content = (
      <TextLink className={txtColor} url={url}>{ text }</TextLink>
    )
  } else {
    content = (
      <p className={txtColor}>{ text }</p>
    )
  }

  return (
    <div
      className={'texttag-container txt-bold ' + bgColor}
    >
      {content}
    </div>
  )
}
