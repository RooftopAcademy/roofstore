import  Icon from "../../../../Components/Icon";
import TextLink from "../../../../Components/TextLink";

function Benefit({icon, txtLink, url, description}) {
    return (
        <div className="row padding-none ProductPage-jc-start">
            <div className="col ProductPage-as-baseline">
                <span className="txt-grey"><Icon icon={icon}/></span>
            </div>
            <div className="col">
                <TextLink  url={url} className={"txt-blue ProductPage-font-size-medium"} children={txtLink}/>
                <span className="ProductPage-txt-light-grey ProductPage-font-size-medium">{description}</span>
            </div>
        </div>
    );
}

export default Benefit