import Icon from "../../../../Components/Icon"
import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";

function Badge({icon, title, description, txtLink="", url}) {
    return(
            <div className="row p-0 ProductPage-jc-start">
                <div className="col ProductPage-as-baseline">
                    <span className="txt-green"><Icon icon={icon}/></span>
                </div>
                <div className="col">
                    <TextLine text={title} className={"ProductPage-txt-start txt-green"}/>  
                    <TextLine text={description} className={"ProductPage-txt-light-grey ProductPage-fs-14"}/> 
                    {txtLink &&
                    <TextLink  url={url} className={"txt-blue ProductPage-fs-14"} children={txtLink}/>
                    }
                </div> 
            </div>
    
        );
}

export default Badge