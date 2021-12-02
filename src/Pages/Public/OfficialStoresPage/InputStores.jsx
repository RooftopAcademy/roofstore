import { forgetLargeIcon } from "../../../Components/SearchHelp/svgIcons"
import { useState } from "react"

function InputStores() {
    const textHolder = 'Buscar Tiendas'

    const [selected, setSelected] = useState(false)

    return (
        <div className="row padding-none -5">
            <div className="col Stores-search-container padding-none w-100">
                <div className="Stores-icon">{forgetLargeIcon}</div>
                <input role="textbox" type="text" onBlur={() => setSelected(!selected)} onFocus={() => setSelected(!selected)} className={`Stores-input ProductPage-p-button w-100 bg-main OffersPage-txt-b ${selected ? 'Stores-input-selected' : ''}`} placeholder={textHolder} />
            </div>
        </div>)
}

export default InputStores

