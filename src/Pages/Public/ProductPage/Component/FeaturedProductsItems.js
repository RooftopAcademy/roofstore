function FeaturedProductsItems({ products }) {
  const freeShippingText = 'Envío gratis'
  const imageSizeWith = 168
  const imageSizeHeight = 168

  return products.map((p, i) => (
    <div
      key={i}
      className="col ProductPage-w-100 shadow-sm bg-white m-0 rounded ProductPage-card"
    >
      <img
        className="br-btm"
        width={imageSizeWith}
        height={imageSizeHeight}
        src={p.image}
        alt={p.title}
      />
      <div className="ProductPage-card-body">
        <p>{p.price}</p>
        {p.freeShipping && (
          <p className="txt-green txt-bold">{freeShippingText}</p>
        )}
        <p className="m-top-2">{p.title}</p>
      </div>
    </div>
  ))
}

export default FeaturedProductsItems