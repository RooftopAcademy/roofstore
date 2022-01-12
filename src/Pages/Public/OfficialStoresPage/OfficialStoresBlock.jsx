import StoreCard from "./StoreCard"

function OfficialStoresBlock({ category }) {

    const textButton = 'Ver todas'
    const text = 'Tiendas destacadas en'

    return (
        <div className=" m-bottom-5 SearchHelp-m-3-top">
            <div className="row padding-none">
                <div className="col padding-none">

                    <p className="title">{text}</p>
                    <p className="txt-bold title">{category.title}</p>
                </div>
            </div>
            <div className="bg-white row padding-none round m-top-4 m-bottom-0 shadow-sm">
                <div className="col padding-none">
                    <div className="Official-card-wrap">
                        {category.brands.map((item , i)=> {
                            return <StoreCard brandName={item.brandName} src={item.src} to={item.to} key={i}/>
                        })}
                    </div>

                </div>
            </div>
            <button className="bg-blue txt-white p-form round txt-bold border-none fz-m w-100">{textButton}</button>
        </div>
    )
}
export default OfficialStoresBlock