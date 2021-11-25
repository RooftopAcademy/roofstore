import { Link } from "react-router-dom"
import TextLine from "../../Components/TextLine"

function MercadoPuntosBenefitItem({item}) {

    const color = {
        1: "HomePage-gradient-color-1",
        2: "HomePage-gradient-color-2",
        3: "HomePage-gradient-color-3",
        4: "HomePage-gradient-color-4"
    }

    return (
        <Link className={"link"} to={"/login"}>
            <div className="rounded HomePage-position-relative HomePage-d-flex HomePage-benefit-item" >

                <img className="HomePage-img HomePage-br-top-radius HomePage-benefit-item-bg-image" src={item.backgroundImage} alt={item.title}/>

                <div className={`${color[item.id]} HomePage-benefit-item-bg-gradient rounded`} >
                </div>

                <div className="row fd-col HomePage-jc-center HomePage-position-relative HomePage-line-height-18">
                    <div className="HomePage-benefit-item-logo m-bottom-0">
                        <img className="HomePage-img rounded" src={item.logo} alt={item.title}/>
                    </div>
                    {item.period &&
                    <span className={"txt-white txt-bold HomePage-fs-10"}>{item.period}</span>
                    }
                    <TextLine className={"txt-white txt-bold HomePage-fs-14"} text={item.title}/>
                    <TextLine className={"txt-white txt-bold HomePage-fs-12"} text={item.subtitle}/>
                </div>
            </div>
        </Link>
    )
}

export default MercadoPuntosBenefitItem