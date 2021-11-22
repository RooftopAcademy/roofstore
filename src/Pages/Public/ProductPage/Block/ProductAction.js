import TextLine from "../../../../Components/TextLine";
import Benefit from "../Component/Benefit";
import product from "../dataProduct"

let buttonShop = "Comprar ahora" 
let buttonAdd = "Agregar al carrito"
function ProductAction() {
    return (
        <div className="container">
            <div className="row">
                <div className="col padding-none ProductPage-w-100">
                    <div className="ProductPage-p-bottom-2">
                        <button className=" bg-blue txt-white rounded txt-bold ProductPage-border-none ProductPage-w-100">
                            <TextLine text={buttonShop} className={"ProductPage-p-button ProductPage-font-size-title"}/>
                        </button>
                    </div>
                    <div>
                        <button className="bg-light-blue txt-blue rounded txt-bold ProductPage-border-none ProductPage-w-100">
                            <TextLine text={buttonAdd} className={"ProductPage-p-button ProductPage-font-size-title"}/>
                        </button>
                    <Benefit 
                        icon = "devolution"
                        txtLink = "Devolución gratis. "
                        url = "#" 
                        description = "Tenés 30 días desde que lo recibís."
                    />
                    <Benefit 
                        icon = "shield"
                        txtLink = "Compra protegida. "
                        url = "#" 
                        description = "recibí el producto que esperabas o te devolvemos tu dinero."
                    />
                    <Benefit 
                        icon = "trophy"
                        txtLink = "Mercado Puntos. "
                        url = "#" 
                        description = {"Sumas " + product.points + " puntos"}
                    />
                    <Benefit 
                        icon = "medal"
                        description = {"6 meses de garantia de fábrica"}
                    />
                    </div>
                </div>    
            </div>
        </div>
    );
}
export default ProductAction