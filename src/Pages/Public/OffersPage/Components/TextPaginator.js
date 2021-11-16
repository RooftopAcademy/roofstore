import { Link } from 'react-router-dom'
import Icon from '../../../../Components/Icon'

export default function TextPaginator({ numPage, className, previousText, nextText }) {

  const content = (previousText)
    ? <>
      <i className="fas fa-angle-left"></i>
      <p className="OffersPage-m-left OffersPage-m-right">{previousText} </p>
    </>

    : <>
      <p className="OffersPage-m-right">{nextText}</p>
      <Icon icon="arrow-right" />
    </>

  return (
    <Link
        to={`/offers?page=${numPage}`}
        className={"col link OffersPage-txt-light-grey OffersPage-ai-center " + className}
    >
      { content }
    </Link>
  )
}