import TextLine from "../../../../Components/TextLine";
import Selector from "../Component/Selector";
import product from "../dataProduct";

let title = "Stock disponible"
let message = "¡Ultimo disponible!"
let ph = "(" + product.stock + " disponibles)"
let content = ""


function ProductStock({item}) {
    if(item.stock > 1) {
    
        content = (
           
            <div>
            <div className="row padding-none">
                <div className="col">
                    <TextLine text={title} className={"txt-black ProductPage-fs-18"}/>
                </div>
            </div>
            <Selector
                variantOpcion = "Stock: "
                opcion = "1"
                placeHolder = {ph}
               
            />
        </div>
        )
        
    }else {
        content = (
            <div className="row padding-none">
                <div className="col">
                    <TextLine text={message} className={"ProductPage-fs-18"}/>
                </div>
            </div>
        )
    }

    return (
        <span>
            {content}
            
        </span>
    );
}
export default ProductStock