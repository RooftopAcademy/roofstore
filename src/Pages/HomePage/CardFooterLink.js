import TextLine from "../../Components/TextLine"
import { Link } from "react-router-dom"
import Icon from '../../Components/Icon'

function CardFooterLink({text, url}) {
    return (
        <Link className={"link"} to={url}>
            <div className="row p-0 txt-blue">
                <div className="col padding-none">
                    <TextLine className={"HomePage-fs-14"} text={text}/>
                </div>
                <div className="col padding-none">
                    <Icon icon={"arrow-right"}/>
                </div>
            </div>
        </Link>
    )
}

export default CardFooterLink