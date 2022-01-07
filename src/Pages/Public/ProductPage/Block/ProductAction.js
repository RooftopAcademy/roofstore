import TextLine from "../../../../Components/TextLine";
import Benefit from "../Component/Benefit";
import product from "../dataProduct"

function ProductAction({item}) {
    const buttonShopText = 'Comprar ahora'
    const buttonAddText = 'Agregar al carrito'
    const freeReturnText = 'Devolución gratis. '
    const sinceYouReceiveText = 'Tenés 30 días desde que lo recibís.'
    const protectedPurchaseText = 'Compra protegida. '
    const refoundYourMoneyText = 'recibí el producto que esperabas o te devolvemos tu dinero.'
    const addPointText = `Sumás ${product.points} puntos`
    const mercadoPointText = 'Mercado Puntos. '
    const factoryWarrantyText = 'meses de garantia de fábrica'

    return (
        <div className="row p-0 ">
            <div className="col padding-none ProductPage-w-100">
                <div className="ProductPage-p-bottom-2">
                    <button className=" bg-blue txt-white rounded txt-bold ProductPage-border-none ProductPage-w-100">
                        <TextLine text={buttonShopText} className={"ProductPage-p-button ProductPage-fs-16"}/>
                    </button>
                </div>
                <div>
                    <button className="bg-light-blue txt-blue rounded txt-bold ProductPage-border-none ProductPage-w-100 ">
                        <TextLine text={buttonAddText} className={"ProductPage-p-button ProductPage-fs-16"}/>
                    </button>
                <Benefit
                    icon="devolution"
                    txtLink={freeReturnText}
                    url="/politicas-de-devolucion"
                    description={sinceYouReceiveText}
                />
                <Benefit
                    icon="shield"
                    txtLink={protectedPurchaseText}
                    url="/compra-protegida" 
                    description={refoundYourMoneyText}
                />
                <Benefit
                    icon="trophy"
                    txtLink={mercadoPointText}
                    url="/mercado-puntos"
                    description={addPointText}
                />
                {item.assurance &&
                    <Benefit
                        icon="medal"
                        description={`${product.insuranceMonths} ${factoryWarrantyText}`}
                    />
                }
                </div>
            </div>
        </div>
    
    );
}
export default ProductAction