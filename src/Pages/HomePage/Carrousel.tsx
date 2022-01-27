import { Link } from "react-router-dom"

interface Banner {
    id: string;
    url: string;
    image: string;
    title: string;
}

interface CarouselProps {
    banners : Array<Banner>,
    visible? : boolean
}

function Carrousel(props : CarouselProps) {
    const {banners} = props

    return (
        <div className="carousel row padding-none">
            <div className="col HomePage-col-12 padding-none HomePage-d-flex overflow-scrollx">
                {banners.map((banner : Banner) => {
                    return (
                        <div className="banner HomePage-col-12" key={banner.id}>
                            <Link to={banner.url} key={banner.id}>
                                <img className="HomePage-img" src={banner.image} alt={banner.title} />
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