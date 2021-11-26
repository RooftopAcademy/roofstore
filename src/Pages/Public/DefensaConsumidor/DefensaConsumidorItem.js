import React from 'react'

function DefensaConsumidorItem({ title, children, lastModifiedDate }) {
  return (
    <section className="border-top-footer">
      <div className="row DefensaConsumidor-flex-end">
        <button className="link-color ProductPage-keyword-information-button DefensaConsumidor-bg-transparent">
          Volver arriba
        </button>
      </div>

      <h3>{title}</h3>
      {lastModifiedDate && <p>Última modificación: {lastModifiedDate}</p>}
      <div>{children}</div>
    </section>
  )
}

export default DefensaConsumidorItem
