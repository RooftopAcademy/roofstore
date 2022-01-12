import OfficialStoresBlock from "./OfficialStoresPage/OfficialStoresBlock"
import WebsiteLayout from "../../Layouts/WebsiteLayout"
import InputStores from './OfficialStoresPage/InputStores'
import useFetch from "../../hooks/useFetch";

function OfficialStores() {
    const textButton = 'Ver todas las tiendas'

    const {data : categories} = useFetch({src: "/data/brandsByCategory.json"})

    return (
        <WebsiteLayout>
            <div className="row padding-none">
                <div className="col padding-none bg-main">
                    <img className="Stores-image-banner w-100" src={"/images/tiendas-oficiales.png"} alt={"Offical Stores Banner"} />
                </div>
            </div>
            <div className="row bg-main ">
                <div className="col">
                    <InputStores />
                    {
                        categories?.map((category, i) => {
                            return (<OfficialStoresBlock category={category} key={i}/>)
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