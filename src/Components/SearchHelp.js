import TextInput from "./TextInput"


function SearchHelp() {
  const placeHodlerText = 'Buscá en Ayuda'
  return (
    <TextInput 
      holderText={placeHodlerText}
      className={`
      row
      rounded
      SearchHelp-fs-16
      SearchHelp-color-light-grey
      SearchHelp-p-0
      SearchHelp-p-3-left
      SearchHelp-placeholder-light-gray
      SearchHelp-bgi-forget
      SearchHelp-border-inputfocus
      `}
    />
  )
}

export default SearchHelp