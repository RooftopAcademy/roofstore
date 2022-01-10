import LinkPaginator from "./LinkPaginator"
import NumberPaginator from "./NumberPaginator"

export default function Paginator({
  currentPage,
  nextUrl,
  prevUrl,
  lastPage = 0,
  classNameLink,
  classNameText,
  classNameNumber,
}) {

  if (lastPage > 0 && currentPage > lastPage) return console.error(
    'El número actual de página es mayor al límite.'
  )

  const prevHidden = (currentPage > 1) ? '' : 'OffersPage-v-hidden'
  const nextHidden = (currentPage === lastPage) ? 'OffersPage-v-hidden' : ''

  const prevText = "Anterior"
  const nextText = "Siguiente"
  const ofText = "de"

  return (
    <div className="row">
      {prevUrl ? 
      <LinkPaginator
        url={prevUrl}
        text={prevText}
        next={false}
        classNameLink={`${classNameLink} ${prevHidden}`}
        classNameText={classNameText}
      /> : "" }

      <div className="col padding-none d-flex ai-center">
        <NumberPaginator page={currentPage} className={classNameNumber}/>
        { lastPage > 0 && <p className="OffersPage-txt-light-grey">{ofText} {lastPage}</p> }
      </div>

      {nextUrl ? 
      <LinkPaginator
        url={nextUrl}
        text={nextText}
        next={true}
        classNameLink={`${classNameLink} ${nextHidden}`}
        classNameText={classNameText}
      /> : "" }
    </div>
  )
}