import { Link } from 'react-router-dom'
import Icon from '../../../../Components/Icon'

export default function LinkPaginator({
  url,
  text,
  next = true,
  classNameLink = 'OffersPage-txt-light-grey',
  classNameText = '',
}) {

  if (!url) return console.error(
    'El componente <LinkPaginator /> necesita una url pasado por la propiedad "url"'
  )
  if (!text) return console.error(
    'El componente <LinkPaginator /> necesita un texto pasado por la propiedad "text"'
  )
  if (!(next === false || next === true)) return console.error(
    'El componente <LinkPaginator /> necesita un booleano pasado por la propiedad "next"'
  )

  let content = (next)
    ? <>
        <p className={`OffersPage-m-right ${classNameText}`}>{text}</p>
        <Icon icon="arrow-right" className={classNameText} />
      </>

    : <>
        <i className={`fas fa-angle-left ${classNameText}`}></i>
        <p className={`OffersPage-m-left OffersPage-m-right ${classNameText}`}>{text}</p>
      </>

  return (
    <Link
      to={url}
      className={`
      col
      link
      OffersPage-ai-center
      ${classNameLink}
    `}>
      { content }
    </Link>
  )
}