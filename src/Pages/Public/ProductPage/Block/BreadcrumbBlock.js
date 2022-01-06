function BreadcrumbBlock({ categories }) {
  /**
   * Si es la primera categoria no se le agrega un icono de flecha antes de la palabra.
   */
  const categoriesItems = categories.map((category, i) => {
    if (i === 0) return <span>{category} </span>
    return <span><i className="fas fa-angle-right" /> {category} </span>
  })

  return (
    <section>
      <div className="row OffersPAge-txt-m ">
        <div className="col padding-none">
          {categoriesItems}
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbBlock
