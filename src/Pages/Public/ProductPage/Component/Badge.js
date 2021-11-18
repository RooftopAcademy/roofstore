import Icon from "../../../../Components/Icon"
import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";

function Badge({icon, title, description, link}) {
    return(
        <div class="row padding-none ProductPage-jc-start m-left-0">
            <div class="col ProductPage-as-baseline">
                <span className="txt-green"><Icon icon={icon}/></span>
            </div>
            <div className="col">
                <TextLine text={title} className={"txt-green"}/>  
                <TextLine text={description} className={"ProductPage-txt-light-grey ProductPage-font-size-medium"}/> 
                <TextLink  url="/Login" className={"txt-blue ProductPage-font-size-medium"} children={link}/>
            </div> 
        </div>
    );
}

export default Badge