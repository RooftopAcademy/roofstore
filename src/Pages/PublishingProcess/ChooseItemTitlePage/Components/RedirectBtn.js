import { useNavigate } from 'react-router-dom'

export default function RedirectBtn({
  text,
  disabled = false,
  className = `
    p-0
    bg-blue
    w-100
    txt-white
    OffersPage-txt-b
    ChooseItemTitle-btn-disabled
  `,
  url,
}) {
  const navigate = useNavigate()

  if (!text) return console.error(`
  El componente <ConfirmBtn /> debe recibir un text como propiedad
  `)

  if (!url) return console.error(`
  El componente <ConfirmBtn /> debe recibir una url como propiedad
  `)

  function handleclick() {
    navigate(url)
  }

  return (
    <button
      disabled={disabled}
      onClick={handleclick}
      className={`
        ConfirmClassification-b-none
        rounded
        ${className}
      `}
    >
      {text}
    </button>
  )
}