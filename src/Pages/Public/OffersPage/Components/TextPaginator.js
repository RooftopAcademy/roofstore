import { Link } from 'react-router-dom'
import Icon from '../../../../Components/Icon'

export default function TextPaginator({ numPage, className, text }) {
  const nextText = "Siguiente"
  const previousText = "Anterior"

  return (
    <Link
        to={`/offers?page=${numPage}`}
        className={"col link OffersPage-txt-light-grey OffersPage-ai-center " + className}
    >
      {text === nextText && <p className="OffersPage-m-right">{text}</p>}
      <Icon icon="arrow-right" />
      {text === previousText && <p className="OffersPage-m-left">{text}</p>}
    </Link>
  )
}