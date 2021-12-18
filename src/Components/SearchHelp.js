import { useState, useRef } from "react"
import Icon from "./Icon"

import SuggestedResults from "./SearchHelp/Components/SuggestedResults"
import SuggestedResultsItems from "./SearchHelp/Components/SuggestedResultItem"
import suggestedResultsData from './SearchHelp/suggestedResultsData'


import { xIcon } from './SearchHelp/svgIcons'


function SearchHelp({isHelpMode = true, setNavBarAsSearchMode = null}) {

  const MAX_SUGGESTED_RESULTS = 6
  let filteredSuggestedResults = suggestedResultsData.slice(0, MAX_SUGGESTED_RESULTS)

  const [ suggestedResults, setSuggestedResults ] = useState(filteredSuggestedResults)
  const [ inputIsFocused, setInputIsFocused ] = useState(false)
  const [ inputValue , setInputValue ] = useState('')

  const inputRef = useRef()

  const placeHodlerText = isHelpMode ? 'Buscá en Ayuda' : 'Estoy buscando...'
  const titleSuggestText = 'Sugerencias para tu búsqueda'

  const handleInput = (e) => {
    const value = e.target.value
    if (value !== '' || !isHelpMode) {
      setInputIsFocused(true)
      setInputValue(value)
      filteredSuggestedResults = suggestedResultsData
        .filter(({ suggested }) => suggested.toLowerCase().includes(value.toLowerCase()))
        .slice(0, MAX_SUGGESTED_RESULTS)
      setSuggestedResults(filteredSuggestedResults)
      return
    }
    setInputValue('')
    setInputIsFocused(false)
  }

  const handleFocus = (e) => {
    const value = e.target.value
    !isHelpMode && setNavBarAsSearchMode(true)
    if (value !== '' || !isHelpMode) return setInputIsFocused(true)
  }

  const handleUnfocus = (e) => {
    setInputIsFocused(false)
    !isHelpMode && setNavBarAsSearchMode(false)
    e.relatedTarget?.click()
    inputRef.current?.blur() // Esto es para arreglar el "bug" al clicar afuera
  }

  const clearInputValue = () => {
    setInputValue('')
    isHelpMode && setInputIsFocused(false)
  }

  return (
    <div
      className={`
      SearchHelp-width-100
      SearchHelp-label-input
      OffersPage-p-relative
    `}
    >
      <div
        className={`
        col
        padding-none
        bg-white
        OffersPage-ai-center
        ${isHelpMode && `SearchHelp-borderinput-blue rounded`}
        ${!isHelpMode && !inputIsFocused && `rounded`}
      `}
      >
        {!isHelpMode && (
          <div
            className="SearchHelp-p-absoulte m-left-2"
            onClick={handleUnfocus}
          >
            <Icon
              className="ProductPage-txt-light-grey"
              icon={inputIsFocused ? "arrow-left" : "search"}
            />
          </div>
        )}
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
          value={inputValue}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleUnfocus}
          ref={inputRef}
        />
        {inputValue !== "" && (
          <span className="d-flex">
            <button
              id="clear-input-content"
              onClick={clearInputValue}
              className={`
                OffersPage-ai-center
                OffersPage-p-0-right
                SearchHelp-bg-transparent
                SearchHelp-border-none
              `}
            >
              {xIcon}
            </button>
          </span>
        )}
      </div>

      {(inputIsFocused && suggestedResults.length > 0) && (
        <SuggestedResults
          isHelpMode={isHelpMode}
          titleSuggestText={titleSuggestText}
        >
          {suggestedResults.map((suggestItem) => (
            <SuggestedResultsItems
              key={suggestItem.id}
              data={suggestItem}
              callback={setInputValue}
            />
          ))}
        </SuggestedResults>
      )}
    </div>
  )
}

export default SearchHelp
