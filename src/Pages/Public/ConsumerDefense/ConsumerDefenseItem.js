function ConsumerDefenseItem({ title, children, lastModifiedDate }) {
  const goBackUpText = 'Vovler arriba'
  const lastModificationText = 'Última modificación:'

  return (
    <section className="border-top-footer">
      <div className="row DefensaConsumidor-flex-end padding-none">
        <button className="link-color ProductPage-keyword-information-button DefensaConsumidor-bg-transparent">
          {goBackUpText}
        </button>
      </div>

      <h4 className="DefensaConsumidor-subtitle m-left-5">{title}</h4>
        {
          lastModifiedDate && <p className="m-left-5">{lastModificationText} {lastModifiedDate}</p>
        }
      <div>&nbsp;</div>
      <div className="DefensaConsumidor-section">
        {children}
      </div>
    </section>
  )
}

export default ConsumerDefenseItem
