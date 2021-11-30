import Icon from '../../../../Components/Icon'
import { Link } from 'react-router-dom'
import { CupIcon, FullStar, HalfStar } from '../svgIcon'
import ShipType from './ShipType'

export default function RoundedProductItem({ data: {
  image,
  offerType = 'none',
  title,
  price,
  cup = false,
  discount = 0,
  interestFreeFees = '0',
  ship: {
    type = 'none',
    full = false,
  },
  brand = 'generic',
  rated: {
    starAverage = '0',
    amount = '0',
  },
  redirect,
}}) {

  if (!image) return console.error(
    'El componente <RoundedProductItem /> debe recibir una url de imagen en la propiedad "image"'
  )
  if (!title) return console.error(
    'El componente <RoundedProductItem /> debe recibir un título de imagen en la propiedad "title"'
  )
  if (!price) return console.error(
    'El componente <RoundedProductItem /> debe recibir un precio de imagen en la propiedad "price"'
  )
  if (!redirect) return console.error(
    'El componente <RoundedProductItem /> debe recibir una url en la propiedad "redrect"'
  )

  const priceFormated = new Intl.NumberFormat(['ban', 'id']).format(price)

  return (
    <>
      <div data-testid="product-item" className="bg-white rounded shadow-sm col padding-none h-100 SearchHelp-m-1-top">
        <Link to={redirect} className="link" >
          <img className="w-100 rounded-top" src={image} alt={title} />

          <div className="row fd-col ai-start">
            <div className="d-flex ai-center">
              { offerType !== 'none' && <ShipType type={offerType} /> }
            </div>

            <p className="OffersPAge-txt-m txt-overflow ProductList-max-h-50 SearchHelp-m-1-top">{title}</p>

            <div className="d-flex ai-center SearchHelp-m-1-top">
              <p className="OffersPage-m-right OffersPage-txt-b">$ {priceFormated}</p>
              { discount > 0 &&
                <div className="d-flex ConfirmClassification-ai-end ">
                  { cup &&
                    <div className="OffersPage-m-right d-flex ai-center">
                      <CupIcon />
                    </div>
                  }
                  <p className="OffersPage-txt-s txt-green">{discount}% OFF</p>
                </div>
              }
            </div>

            { interestFreeFees !== '0' &&
              <div className="d-flex ai-center ProductList-m-1-top">
                <p className="OffersPage-txt-s txt-green">Hasta {interestFreeFees} cuotas sin interés</p>
              </div>
            }

            <div className="d-flex ai-center ProductList-m-1-top">
              { type !== 'none' && <div className="d-flex ai-center OffersPage-m-right"><ShipType type={type} /></div> }
              { full &&
                <p className="txt-green fz-xsm txt-bold ">
                  <Icon icon="lightning" className="txt-green" />
                  &nbsp;FULL
                </p>
              }
            </div>

            { brand !== 'generic' &&
              <p className="OffersPage-txt-s OffersPage-txt-light-grey ProductList-m-1-top">
                por {brand}
              </p>
            }
            { starAverage === '4.5' &&
              <div className="d-flex ai-center ProductList-m-1-top">
                <FullStar/><FullStar/><FullStar/><FullStar/><HalfStar/> 
                <p className="OffersPage-txt-s OffersPage-txt-light-grey">{amount}</p>
                </div>
            }
            { starAverage === '5' &&
              <div className="d-flex ai-center ProductList-m-1-top">
                <FullStar/><FullStar/><FullStar/><FullStar/><FullStar/>
                <p className="OffersPage-txt-s OffersPage-txt-light-grey">{amount}</p>
              </div>
            }
          </div>
        </Link>
      </div>
    </>
  )
}