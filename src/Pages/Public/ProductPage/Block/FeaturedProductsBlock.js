function FeaturedProductsBlock({ title, products }) {
  return (
    <section>
      <div className="row padding-none">
        <div className="col ProductPage-w-100">
          <h3>{title}</h3>
          <div className="row padding-none ProductPage-slider">
            {products.map((p, idx) => (
              <div
                key={idx}
                className="col ProductPage-w-100 shadow-sm bg-white m-0 rounded ProductPage-card"
              >
                <img
                  className="br-btm"
                  width={168}
                  height={168}
                  src={p.image}
                  alt={p.description}
                />
                <div className="ProductPage-card-body">
                  <p>{p.price}</p>
                  {p.freeShipping && (
                    <p className="txt-green txt-bold">Envío gratis</p>
                  )}
                  <p className="m-top-2">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsBlock
