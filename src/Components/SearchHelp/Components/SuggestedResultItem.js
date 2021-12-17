import { Link } from "react-router-dom"
import { forgetNormalIcon, arrowLeftUpIcon } from '../svgIcons'

function SuggestedResultsItem({ data: { suggested, redirect }, callback: setInputValue }) {
  const handleClick = () => {
    setInputValue(suggested)
  }
  return (
    <div className="row justify-content-sb padding-none SearchHelp-m-3-top">
      <Link to={redirect} className="txt-black col link padding-none OffersPage-ai-center">
        { forgetNormalIcon }
        <p className="txt-bold OffersPage-p-0-left">{ suggested }</p>
      </Link>
      <button
        onClick={handleClick}
        className="col padding-none SearchHelp-bg-transparent SearchHelp-br-transparent"
      >
        { arrowLeftUpIcon }
      </button>
    </div>
  )
}

export default SuggestedResultsItem