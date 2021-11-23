import { Link } from "react-router-dom"

function Carrousel({bannerList}) {
    return (
        <div className="row padding-none">
            <div className="col HomePage-col-12 padding-none HomePage-d-flex overflow-scrollx">
                {bannerList.map(item => {
                    return (
                        <div className="HomePage-col-12" key={item.id}>
                            <Link to={item.url} key={item.id}>
                                <img className="HomePage-img" src={item.image} alt={item.title} />
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Carrousel