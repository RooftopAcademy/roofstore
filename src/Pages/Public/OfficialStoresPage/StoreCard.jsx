import { Link } from "react-router-dom"

function StoreCard({ src, brandName, to }) {
    return (

        <div className="OffersPage-6-col MenuMobile-p-1-vertical border-bg-main">
            <Link role="link" to={to} className="link fd-col OffersPage-ai-center">
                <img src={src} alt="Offical Store" />
                <p className="p-0 ProductPage-txt-light-grey HomePage-fs-14">{brandName}</p>
            </Link>
        </div>
    )
}

export default StoreCard