import { useState } from "react"
import OpinionComponent from "../Component/OpinionComponent"
import ToogleButtons from "../Component/ToogleButtons"
import { MOCK_OPINIONS } from '../mockData'

function ProductReviewsBlock({ data }) {

  const LABELS = {
    all: "Todas",
    positive: "Positivas",
    negative: "Negativas",
  }
  const productOpinions = "Opiniones sobre el producto"
  const spanTxt = "Promedio entre 24 opiniones"
  const btnTxt = " Ver todas las opiniones"

  const [active, setActive] = useState(LABELS.all)

  const filteredOpinions =
    active === LABELS.all
      ? MOCK_OPINIONS
      : active === LABELS.positive
        ? MOCK_OPINIONS.filter((opinion) => opinion.isPositiveReview)
        : MOCK_OPINIONS.filter((opinion) => !opinion.isPositiveReview)

  return (
    <section className="shadow-sm">
      <div className="row m-top-0 padding-none">
        <div className="col ProductPage-w-100 padding-none">
          <p className="m-0">{productOpinions}</p>
          {/* Rating summary */}
          <div className="row ProductPage-row-left">
            <span className="ProductPage-text-big">{data}</span>
            <div className="col">
              <div className="row padding-none ProductPage-star-row-color">
                <span>
                  <i className="fas fa-star link-color" />
                </span>
                <span>
                  <i className="fas fa-star link-color" />
                </span>
                <span>
                  <i className="fas fa-star link-color" />
                </span>
                <span>
                  <i className="fas fa-star-half-alt link-color" />
                </span>
                <span>
                  <i className="far fa-star link-color" />
                </span>
              </div>
              <div className="padding-none">
                <span className="ProductPage-txt-light-grey ProductPage-text-sm">
                  {spanTxt}
                </span>
              </div>
            </div>
          </div>
          {/* End Rating summary */}
          <ToogleButtons
            active={active}
            labels={LABELS}
            setActive={setActive}
          />
          {filteredOpinions.map((opinion) => (
            <OpinionComponent key={opinion.id} opinion={opinion} />
          ))}

          <div className="row">
            <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left m-bottom-4">
              {btnTxt} <i className="fas fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductReviewsBlock
