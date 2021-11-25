import { Link } from "react-router-dom"

export default function CategoryOfferItem({
  data: { title, image }, id
}) {
  const active = (id === 0) ? 'txt-bold OffersPage-active' : ''
  const promotionType = 'PROMOTION_TYPE'

  return (
    <Link to={`?promotion_type=${promotionType}`} className="
      row
      link
      bg-white
      rounded
      shadow-sm
      row padding-none
      fd-col
      jc-center
      OffersPage-p-relative
      OffersPage-jc-center
      OffersPage-p-0-left
      OffersPage-p-0-right
      OffersPage-offer-item
      OffersPage-m-right
    ">
      <div className="col padding-none">
        <img
          width="48px"
          height="48px"
          className="OffersPage-m-bottom"
          src={image}
          alt={title}
        />
      </div>
      <div className="col padding-none">
        <p className={"txt-grey txt-center OffersPage-txt-s OffersPage-offer-title " + active}>
          {title}
        </p>
      </div>
    </Link>
  )
}