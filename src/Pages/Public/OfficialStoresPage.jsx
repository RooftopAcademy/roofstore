import OfficialStoresBlock from "./OfficialStoresPage/OfficialStoresBlock"
import { officialStoresData } from "./OfficialStoresPage/officialStoresData"
import WebsiteLayout from "../../Layouts/WebsiteLayout"
import { forgetLargeIcon } from '../../Components/SearchHelp/svgIcons'
import InputStores from './OfficialStoresPage/InputStores'
function OfficialStores() {
    const textButton = 'Ver todas las tiendas'
    return (
        <WebsiteLayout>
            <div className="row padding-none">
                <div className="col padding-none bg-main">
                    <img className="Stores-image-banner w-100" src={"https://http2.mlstatic.com/resources/largesellers/header-web_mobile-768-HSP@2x.png"} alt={"Offical Stores Banner"} />
                </div>
            </div>
            <div className="row bg-main ">
                <div className="col">
                    <InputStores />
                    {
                        officialStoresData.map(category => {
                            return (<OfficialStoresBlock category={category} />)
                        })
                    }
                    <div className="row jc-center">
                        <div className="col">
                            <button className="bg-blue txt-white p-form round txt-bold border-none fz-m ">{textButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout >
    )
}

export default OfficialStores