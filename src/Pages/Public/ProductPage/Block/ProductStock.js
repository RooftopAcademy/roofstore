import TextLine from "../../../../Components/TextLine";
import Selector from "../Component/Selector";
import product from "../dataProduct";

let title = "Stock disponible"
let jj = "¡Ultimo disponible!"
let ph = "(" + product.stock + " disponibles)"



function ProductStock({item}) {
    return (
        <div className="container">
            {(item.stock > 1) &&
                <div>
                    <div className="row padding-none">
                        <div className="col">
                            <TextLine text={title} className={"txt-black ProductPage-font-size-large"}/>
                        </div>
                    </div>
                    <Selector
                        variantOpcion = "Stock: "
                        opcion = "1"
                        placeHolder = {ph}
                       
                    />
                </div>
                
            }{
                <div className="row padding-none">
                        <div className="col">
                            <TextLine text={jj} className={"ProductPage-font-size-large"}/>
                        </div>
                    </div>
            }
                
        </div>
        
    );
}
export default ProductStock