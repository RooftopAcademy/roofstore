import { useState } from "react"

import SuggestedResultsItems from './SearchHelp/Components/SuggestedResultItem'
import suggestedResultsData from './SearchHelp/suggestedResultsData'
import { xIcon } from './SearchHelp/svgIcons'


function SearchHelp() {
  const results = (() => {
    let items = []
    for (let i = 0; i < 6; i++) {
      items.push(<SuggestedResultsItems key={suggestedResultsData[i].id} data={suggestedResultsData[i]}/>)
    }
    return items
  })()

  const input = document.getElementById('search-help')

  const [ suggestedResults, setSuggestedResults ] = useState('')
  const [ inputIsFocused, setInputIsFocused ] = useState(false)
  const [ inputHasValue, setInputHasValue ] = useState(false)

  const placeHodlerText = 'Buscá en Ayuda'
  const titleSuggestText = 'Sugerencias para tu búsqueda'

  const handleInput = (e) => {
    const inputValue = e.target.value
    if (inputValue !== '') {
      setInputIsFocused(true)
      setInputHasValue(true)
      setSuggestedResults(results)
      return
    }
    setInputHasValue(false)
    setInputIsFocused(false)
  }

  const handleFocus = (e) => {
    const inputValue = e.target.value
    if (inputValue !== '') return setInputIsFocused(true)
  }

  const handleUnfocus = () => {
    setTimeout(() => {
      setInputIsFocused(false)
    }, 0)
  }

  const clearInputValue = () => {
    input.value = ''
    setInputHasValue(false)
  }

  return (
    <div className={`
      SearchHelp-width-100
      SearchHelp-label-input
      OffersPage-p-relative
    `}>
      <div className={`
        col
        rounded
        padding-none
        bg-white
        OffersPage-ai-center
        SearchHelp-borderinput-blue
      `}>
        <input
          id="search-help"
          autoComplete="off"
          placeholder={placeHodlerText}
          className={`
            SearchHelp-width-100
            OffersPage-ai-center
            rounded
            SearchHelp-fs-16
            SearchHelp-color-black
            SearchHelp-p-0
            SearchHelp-p-2-left
            SearchHelp-placeholder-light-gray
            SearchHelp-bgi-forget
            SearchHelp-border-none
          `}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleUnfocus}
        />
        <span className={inputHasValue ? 'd-flex' : 'OffersPage-d-none'}>
          <button id="clear-input-content" onClick={clearInputValue} className={`
            OffersPage-ai-center
            OffersPage-p-0-right
            SearchHelp-bg-transparent
            SearchHelp-border-none
          `}>
            {xIcon}
          </button>
        </span>
      </div>

      {inputIsFocused &&
        <div id="suggested-results" className={`
          row
          fd-col
          bg-white
          rounded
          shadow-sm
          SearchHelp-ai-start
          SearchHelp-m-1-top
          SearchHelp-p-absoulte
          SearchHelp-width-100
        `}>
          <div className="col padding-none SearchHelp-width-100">
            <p className="texttag-p txt-bold OffersPage-txt-light-grey">
              { titleSuggestText }
            </p>
          </div>
          { suggestedResults }
        </div>
      }
    </div>
  )
}

export default SearchHelp