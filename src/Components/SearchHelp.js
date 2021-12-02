import { useState } from "react"
import Icon from "./Icon"

import SuggestedResultsItems from './SearchHelp/Components/SuggestedResultItem'
import suggestedResultsData from './SearchHelp/suggestedResultsData'
import { xIcon } from './SearchHelp/svgIcons'


function SearchHelp({isHelpMode = true, setNavBarAsSearchMode = null}) {
  
  const results = (() => {
    const maxResults = 6
    let items = []
    for (let i = 0; i < maxResults; i++) {
      items.push(<SuggestedResultsItems key={suggestedResultsData[i].id} data={suggestedResultsData[i]}/>)
    }
    return items
  })()

  const input = document.getElementById('search-help')

  const [ suggestedResults, setSuggestedResults ] = useState(results)
  const [ inputIsFocused, setInputIsFocused ] = useState(false)
  const [ inputHasValue, setInputHasValue ] = useState(false)

  const placeHodlerText = isHelpMode ? 'Buscá en Ayuda' : 'Estoy buscando...'
  const titleSuggestText = 'Sugerencias para tu búsqueda'

  const handleInput = (e) => {
    const inputValue = e.target.value
    if (inputValue !== '' || !isHelpMode) {
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
    !isHelpMode && setNavBarAsSearchMode(true)
    if (inputValue !== '' || !isHelpMode) return setInputIsFocused(true)
  }

  const handleUnfocus = () => {
    setTimeout(() => {
      setInputIsFocused(false)
      !isHelpMode && setNavBarAsSearchMode(false)
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
        padding-none
        bg-white
        OffersPage-ai-center
        ${isHelpMode && `SearchHelp-borderinput-blue rounded`}
        ${!isHelpMode && !inputIsFocused && `rounded`}
      `}>
        {!isHelpMode && <Icon className="ProductPage-txt-light-grey SearchHelp-p-absoulte m-left-2" icon={inputIsFocused ? "arrow-left" : 'search'} />}
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
            ${isHelpMode && `SearchHelp-bgi-forget`}
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
          shadow-sm
          SearchHelp-ai-start
          SearchHelp-width-100
          SearchHelp-p-absoulte
          ${isHelpMode ? 
          `SearchHelp-m-1-top
          rounded
          ` :
          `br-top`
          }
        `}>
          <div className="col padding-none SearchHelp-width-100">
            {isHelpMode && <p className="texttag-p txt-bold OffersPage-txt-light-grey">
              { titleSuggestText }
            </p>}
          </div>
          { suggestedResults }
        </div>
      }
    </div>
  )
}

export default SearchHelp