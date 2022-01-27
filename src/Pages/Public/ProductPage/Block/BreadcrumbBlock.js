function BreadcrumbBlock({ categories }) {
  /**
   * Si es la primera categoria no se le agrega un icono de flecha apuntando a la derecha antes de la palabra.
   * Ej: Deportes > Bicicletas > Rodado 29 > Mountain Bike
   */
  const categoriesItems = categories.map((category, i) => {
    if (i === 0) return <span key={i}>{category} </span>
    return <span key={i}><i className="fas fa-angle-right" /> {category} </span>
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
