function ShoppingHistoryItem({shoppingData}) {
  const data = shoppingData
  return (
    <div className="row">
        <div className="col bg-white rounded shadow-sm padding-none d-flex w-100 fd-col">
          <p className="txt-black txt-bold br-btm p-0">
            {data.shoppingDate}
          </p>
          <div className="p-2 d-flex">
            <p>Aquí va más info</p>
          </div>
        </div>
      </div>
  )
}

export default ShoppingHistoryItem