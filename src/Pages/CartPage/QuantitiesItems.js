export default function QuantitiesItems({
  data: { el, i },
  onClick: { handleButtons, handleOpenModal }
}) {
  const txtBlue = (i > 5)
    ? 'txt-blue'
    : ''

  return (
    <div className={`
      col
      padding-none
      w-100
      br-top
      txt-center
      OffersPage-p-relative
    `}>
      <button
        value={(i + 1)}
        onClick={(i < 5)
          ? handleButtons
          : handleOpenModal
        }
        className={`
          w-100
          p-0
          border-none
          bg-white
          ProductPage-fs-16
          ${txtBlue}
        `}>
          { el }
      </button>
    </div>
  )
}