import  Icon from "../../../../Components/Icon";
import TextLink from "../../../../Components/TextLink";

function Benefit({icon, txtLink="", url, description}) {
    return (
        <div className="row ProductPage-jc-start">
            <div className="col padding-none ProductPage-as-baseline">
                <span className="txt-grey"><Icon icon={icon}/></span>
            </div>
            <div className="col padding-none m-left-0">
                {txtLink &&
                <TextLink  url={url} className={"txt-blue ProductPage-fs-14"} children={txtLink}/>
                }
                <span className="ProductPage-txt-light-grey ProductPage-fs-14">{description}</span>
            </div>
        </div>
    );
}

export default Benefit