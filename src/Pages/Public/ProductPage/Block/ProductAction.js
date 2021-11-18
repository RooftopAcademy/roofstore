import TextLine from "../../../../Components/TextLine";

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
                    </div>
                </div>    
            </div>
        </div>
    );
}
export default ProductAction