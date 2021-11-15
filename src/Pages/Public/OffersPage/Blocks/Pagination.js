import PageNumberPaginator from "../Components/PageNumberPaginator"
import TextPaginator from "../Components/TextPaginator"

export default function Pagination() {

  const urlSearchParams = new URLSearchParams(window.location.search)
  const currentPage = Object.fromEntries(urlSearchParams.entries()).page || 1
  const previousHidden = (currentPage > 1) ? '' : 'OffersPage-v-hidden'
  const numNextPage = Number(currentPage) + 1
  const numPreviousPage = Number(currentPage) - 1

  const previousText = "Anterior"
  const nextText = "Siguiente"

  return (
    <div className="row">
      <TextPaginator className={previousHidden} text={previousText} numPage={numPreviousPage} />
      <PageNumberPaginator currentPage={currentPage}/>
      <TextPaginator text={nextText} numPage={numNextPage} />
    </div>
  )
}