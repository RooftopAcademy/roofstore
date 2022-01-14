import { Link } from "react-router-dom"
import TextLine from '../../Components/TextLine'

function OfficialStoreItem({officialStore: {backgroundImage, title, logo, to}}) {
    return (
        <div className="m-left-0 m-right-0">
            <Link className="link" to={to}>
                <div className="bg-white rounded HomePage-position-relative">
                    <div className="HomePage-br-top-radius HomePage-official-store-banner-img HomePage-overflow-hidden HomePage-d-flex HomePage-jc-center" >
                        <img className="HomePage-img HomePage-width-auto" src={backgroundImage} alt={title} />
                    </div>
                    <div className="bg-white rounded shadow-sm HomePage-official-store-logo">
                        <img className="HomePage-img rounded" src={logo} alt={title} />
                    </div>
                    <div className="p-0 HomePage-m-left-100">
                        <TextLine className="txt-bold txt-grey HomePage-txt-start HomePage-fs-16" text={title}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default OfficialStoreItem