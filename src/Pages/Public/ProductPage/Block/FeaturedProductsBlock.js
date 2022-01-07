import FeaturedProductsItems from "../Component/FeaturedProductsItems"

function FeaturedProductsBlock({ title, products }) {

  return (
    <section>
      <div className="row padding-none">
        <div className="col ProductPage-w-100">
          <h3>{title}</h3>
          <div className="row padding-none ProductPage-slider">
            <FeaturedProductsItems products={products} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsBlock
