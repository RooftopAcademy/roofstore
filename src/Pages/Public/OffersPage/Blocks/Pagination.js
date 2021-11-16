import PageNumberPaginator from "../Components/PageNumberPaginator"
import TextPaginator from "../Components/TextPaginator"

export default function Pagination({ numPages }) {

  const urlSearchParams = new URLSearchParams(window.location.search)
  const currentPage = Number(Object.fromEntries(urlSearchParams.entries()).page) || 1
  const numNextPage = currentPage + 1
  const numPreviousPage = currentPage - 1

  const previousHidden = (currentPage > 1) ? '' : 'OffersPage-v-hidden'
  const nextHidden = (currentPage === numPages) ? 'OffersPage-v-hidden' : ''

  const previousText = "Anterior"
  const nextText = "Siguiente"

  return (
    <div className="row">
      <TextPaginator className={previousHidden} previousText={previousText} numPage={numPreviousPage} />
      <PageNumberPaginator currentPage={currentPage}/>
      <TextPaginator className={nextHidden} nextText={nextText} numPage={numNextPage} />
    </div>
  )
}