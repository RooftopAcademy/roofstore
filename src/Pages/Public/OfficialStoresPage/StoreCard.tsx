import { Link } from "react-router-dom"
import {Brand} from "../../../types/brands"

function StoreCard(props: {brand: Brand}):JSX.Element  {
    const {brand} = props
    return (

        <div className="OffersPage-6-col MenuMobile-p-1-vertical border-bg-main">
            <Link role="link" to={brand.to} className="link fd-col OffersPage-ai-center">
                <img src={brand.src} alt="Offical Store" />
                <p className="p-0 ProductPage-txt-light-grey HomePage-fs-14">{brand.brandName}</p>
            </Link>
        </div>
    )
}

export default StoreCard