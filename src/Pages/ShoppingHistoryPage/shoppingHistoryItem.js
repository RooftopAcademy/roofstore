function ShoppingHistoryItem({shoppingData}) {
  const data = shoppingData
  return (
    <div className="row">
        <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
          <p className="txt-black txt-bold br-btm p-0">
            {data.shoppingDate}
          </p>
          <div className="p-2 d-flex">
            <img src={data.img} alt={data.productName} className="grey-border horizontal-product-img" />
            <div className="m-left-1 d-flex fd-col">
              <p className="txt-green txt-bold">
                {data.shippingStatus}
              </p>
              <p>
                {data.deliveryDate}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShoppingHistoryItem