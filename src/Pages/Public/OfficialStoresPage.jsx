import OfficialStoresBlock from "./OfficialStoresPage/OfficialStoresBlock"
import { officialStoresData } from "./OfficialStoresPage/officialStoresData"
import WebsiteLayout from "../../Layouts/WebsiteLayout"
function OfficialStores() {
    const textButton = 'Ver todas las tiendas'
    return (
        <WebsiteLayout>
            <div className="row bg-main ">
                <div className='col'>
                    <OfficialStoresBlock category={officialStoresData.computation} />
                    <div className="row jc-center">
                        <div className="col">
                            <button className="bg-blue txt-white p-form round txt-bold border-none fz-m ">{textButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    )
}
export default OfficialStores