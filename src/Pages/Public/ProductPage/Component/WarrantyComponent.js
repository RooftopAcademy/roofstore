function WarrantyComponent({ warranty }) {
  const warrantyText = 'Garantía'
  const protectedPurchaseText = 'Compra Protegida con RoofPay'
  const receiveProductText = 'Recibí el producto que esperabas o te devolvemos tu dinero'
  const storeWarrantyText = 'Garantía de la tienda'
  const factoryWarrantyText = 'Garantía de fábrica:'
  const learnAboutWarrantyText = 'Conocer más sobre garantía'
  return (
    <section className="row shadow-sm">
      <div className="col ProductPage-w-100">
        <h3 className="ProductPage-section-title m-bottom-2">{warrantyText}</h3>
        <p>{protectedPurchaseText}</p>
        <p className="ProductPage-txt-light-grey m-bottom-4">
          {receiveProductText}
        </p>
        <p>{storeWarrantyText}</p>
        <p className="ProductPage-txt-light-grey m-bottom-4">
          {factoryWarrantyText} {warranty}
        </p>
        <button className="rounded txt-blue bg-white p-0 input ProductPage-btn-left">
          {learnAboutWarrantyText} <i className="fas fa-angle-right" />
        </button>
      </div>
    </section>
  )
}

export default WarrantyComponent
