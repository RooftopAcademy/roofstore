import TextTag from '../../../../Components/TextTag'
import { Link } from 'react-router-dom'
import Icon from '../../../../Components/Icon'

export default function PublicationItem({ data: {
    image,
    price,
    discount,
    interestFree,
    title,
    brand,
    ship: {
      free,
      full
    },
    offerOfDay,
    redirect
}}) {
  const oldPrice = new Intl.NumberFormat('es-ES').format(price)
  const newPrice = new Intl.NumberFormat('es-ES').format((price - (price * discount / 100)).toFixed())
  const minDiscount = 5

  const offerOfDayText = "OFERTA DEL DÍA"
  const oldPriceText = `$ ${oldPrice}`
  const newPriceText = `$ ${newPrice}`
  const discountText = `${discount}% OFF`
  const interestFreeText = `Hasta ${discount} cuotas sin interés`
  const freeShipText = "Envío gratis"
  const fullShipText = "FULL"
  const brandText = `por ${brand}`

  return (
      <Link to={redirect} className="
        col
        link
        bg-white
        padding-none
        txt-black
        br-top
        br-left
        OffersPage-6-col
        OffersPage-p-0-left
        OffersPage-publication-h
      ">
        <div className="col padding-none OffersPage-jc-center ">
          <img
            width="144px"
            height="144px"
            src={image}
            alt={title}
          />
        </div>
        {offerOfDay && <TextTag text={offerOfDayText} />}
        {discount > 0 && <p className="txt-strike OffersPage-txt-light-grey OffersPage-txt-s">{oldPriceText}</p>}
        <div className="col padding-none OffersPage-ai-center">
          <span className="OffersPage-txt-b OffersPage-m-right">{newPriceText}</span>
          {discount > minDiscount && <span className="OffersPAge-txt-m txt-green">{discountText}</span>}
        </div>
        {interestFree !== 0 && <p className="OffersPage-txt-s txt-green">{interestFreeText}</p>}
        <div className="
          col
          padding-none
          txt-green
          OffersPage-ai-center
          OffersPage-txt-s
          OffersPage-m-bottom
        ">
          {free && <p className="txt-bold OffersPage-m-right">{freeShipText}</p>}
          {full && <><Icon icon="lightning" /><p className="txt-bold">&nbsp;<i>{fullShipText}</i></p></>}
        </div>
        <p className="
          txt-grey
          txt-overflow
          OffersPAge-txt-m
          OffersPage-publication-title
        ">
          {title}
        </p>
        {brand && <p className="OffersPAge-txt-m OffersPage-txt-light-grey">{brandText}</p>}
      </Link>
  )
}