import TextLine from "../../../../Components/TextLine";
import  Icon from "../../../../Components/Icon";
import TextLink from "../../../../Components/TextLink";

function Benefit({icon, title, subtitle, description}) {
    return (
        <div className="container ProductPage-p-top-0">
                <div className="row ProductPage-p-top-0">
                    <div className="col padding-none">
                        <span className="txt-green ProductPage-d-flex">
                            <span className="m-right-0"><Icon icon={icon}/></span>
                            <TextLine text={title} className={"txt-green"}/>
                        </span>
                        <TextLine text={subtitle} className={"txt-grey m-left-5 ProductPage-font-size-medium"}/>
                        <TextLink url="/Login" className={"txt-blue ProductPage-font-size-medium m-left-5"} children={description}/>
                    </div>
                </div>
            </div>
    );
}

export default Benefit