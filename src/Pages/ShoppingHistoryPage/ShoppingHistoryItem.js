import ShoppingHistoryProduct from './ShoppingHistoryProduct'

function ShoppingHistoryItem({shoppingData}) {
  const data = shoppingData
  return (
    <div className="row shopping-history-item">
        <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
          <p className="txt-black txt-bold br-btm p-0">
            {data.shoppingDate}
          </p>
          {
            data.products.map((item) => {
              return <ShoppingHistoryProduct productData = {item} key={item.productId} />
            })
          }
        </div>
      </div>
  )
}

export default ShoppingHistoryItem