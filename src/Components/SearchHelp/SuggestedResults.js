const SuggestedResults = ({
  isHelpMode,
  titleSuggestText = "",
  children,
}) => {
  return (
    <div
      id="suggested-results"
      className={`
          row
          fd-col
          bg-white
          shadow-sm
          SearchHelp-ai-start
          SearchHelp-width-100
          SearchHelp-p-absoulte
          SearchHelp-z-index
          ${isHelpMode ? `SearchHelp-m-1-top rounded` : `br-top`}
        `}
    >
      <div className="col padding-none SearchHelp-width-100">
        {isHelpMode && (
          <p className="texttag-p txt-bold OffersPage-txt-light-grey">
            {titleSuggestText}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}

export default SuggestedResults
