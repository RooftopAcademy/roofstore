export default function QuantitiesItems({
  option,
  handleButtons,
  handleOpenModal
}) {
  const txtBlue = option.value > 5 ? 'txt-blue' : ''

  let clickHandler = (option.value < 6) ? handleButtons : handleOpenModal

  return (
    <div className={`col padding-none w-100 br-top txt-center OffersPage-p-relative`}>
      <button
        value={option.value}
        onClick={clickHandler}
        className={`
          w-100
          p-0
          border-none
          bg-white
          ProductPage-fs-16
          ${txtBlue}
        `}>
          { option.text }
      </button>
    </div>
  )
}