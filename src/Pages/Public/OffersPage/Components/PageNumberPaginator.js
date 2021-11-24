import { Link } from "react-router-dom"

export default function PageNumberPaginator({ currentPage }) {

  return (
  <div className="col OffersPage-ai-center">
    <div className="
        col
        txt-bold
        txt-center
        OffersPage-bg-light-grey
        OffersPage-pagination
    ">
        <Link className="link txt-black" to={`/offers?page=${currentPage}`}>
            <p>{currentPage}</p>
        </Link>
    </div>
  </div>
  )
}