import categoriesData from './categoriesData'
import HelpBlock from './HelpBlock'

function HelpPageCategory() {
    return (
        <div className="row  bg-main vh-100">
            <div className="col w-100">
                <HelpBlock items={categoriesData.buys} />
            </div>
        </div>)
}

export default HelpPageCategory

