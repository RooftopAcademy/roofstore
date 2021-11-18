import Logo from "../../../../Components/Logo"
import TextLine from "../../../../Components/TextLine";

function Spec({item}) {
    return(
        <div className="row ProductPage-p-top-0 ProductPage-p-bottom-0 ProductPage-jc-start">
            <div className="col padding-none">
                <Logo imgAlt="" imgSrc={item.icon}/> 
            </div>
            <div className="col">
                <span className="ProductPage-d-flex">
                    <TextLine text={item.category} className={"txt-grey ProductPage-font-size-medium"}/>
                    <TextLine text={item.value} className={"txt-bold ProductPage-font-size-medium"}/>
                </span>   
            </div>
        </div>
    );
}

export default Spec   