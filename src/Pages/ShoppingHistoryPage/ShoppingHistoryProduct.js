function ShoppingHistoryProduct({ productData }) {
  const product = productData

  return (
    <div className="p-2 d-flex br-btm">
      <img src={product.img} alt={product.productName} className="grey-border horizontal-product-img" />
      <div className="m-left-1 d-flex fd-col">
        <p className="txt-green txt-bold">
          {product.shippingStatus}
        </p>
        <p>
          {product.deliveryDate}
        </p>
      </div>
    </div>
  )
}

export default ShoppingHistoryProduct