import TextLine from "../../../../Components/TextLine";
import Benefit from "../Component/Benefit";
import product from "../dataProduct"

let buttonShop = "Comprar ahora" 
let buttonAdd = "Agregar al carrito"

function ProductAction({item}) {
    return (
            <div className="row p-0 ">
                <div className="col padding-none ProductPage-w-100">
                    <div className="ProductPage-p-bottom-2">
                        <button className="bg-blue txt-white rounded txt-bold ProductPage-border-none ProductPage-w-100">
                            <TextLine text={buttonShop} className={"ProductPage-p-button ProductPage-fs-16"}/>
                        </button>
                    </div>
                    <div>
                        <button className="bg-light-blue txt-blue rounded txt-bold ProductPage-border-none ProductPage-w-100 ">
                            <TextLine text={buttonAdd} className={"ProductPage-p-button ProductPage-fs-16"}/>
                        </button>
                    <Benefit 
                        icon = "devolution"
                        txtLink = "Devolución gratis. "
                        url = "/politicas-de-devolucion" 
                        description = "Tenés 30 días desde que lo recibís."
                        url = "/compra-protegida" 
                        description = "recibí el producto que esperabas o te devolvemos tu dinero."
                    />
                    <Benefit 
                        icon = "trophy"
                        txtLink = "Mercado Puntos. "
                        url = "/mercado-puntos" 
                        description = {"Sumás " + product.points + " puntos"}
                    />
                    {item.assurance &&
                        <Benefit 
                            icon = "medal"
                            description = {product.insuranceMonths + " meses de garantia de fábrica"}
                        />
                    }
                    </div>
                </div>    
            </div>
     
    );
}
export default ProductAction