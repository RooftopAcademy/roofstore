import TextLine from "../../Components/TextLine"
import { Link } from "react-router-dom"

function Advertisement({item, textLink}) {
    return (
        <div className="row">
            <div className="col bg-white rounded shadow-sm padding-none HomePage-col-12">
                <Link className={"link"} to={"/login"}>
                    <div className="HomePage-d-flex padding-none">
                        <div className="p-0 HomePage-d-flex fd-col HomePage-flex-grow-1">
                            <TextLine className={"txt-black txt-bold HomePage-txt-start HomePage-fs-12"} text={item.title}/>
                            <TextLine className={"txt-black txt-bold HomePage-txt-start HomePage-fs-20"} text={item.body1}/>
                            <TextLine className={"txt-black txt-bold HomePage-txt-start HomePage-fs-20 HomePage-flex-grow-1"} text={item.body2}/>
                            <TextLine className={"txt-blue HomePage-txt-start"} text={textLink}/>
                        </div>
                        <div className="HomePage-advertisement-image">
                            <img className="HomePage-img rounded" src={item.image} alt={item.title}/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Advertisement