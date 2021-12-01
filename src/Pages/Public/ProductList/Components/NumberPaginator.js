export default function NumberPaginator({
  page,
  className = 'OffersPage-bg-light-grey'
}) {

  return (
    <div className="col OffersPage-ai-center">
      <div className={`
        col
        padding-none
        txt-bold
        txt-center
        ai-center
      `}>
        <p className={`OffersPage-pagination p-0 ${className}`}>
          { page }
        </p>
      </div>
    </div>
  )
}