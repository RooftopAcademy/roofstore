import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";

let content = ""
let  priceOff
let priceCuotas
let installmentPrice
let url = "/medios-de-pago"

 
function ProductPrice({item}) {
    priceOff = item.price - ((item.price * item.discountRate) / 100)
    priceCuotas = priceOff / item.cantCuotas
    installmentPrice= parseFloat(Math.round(priceCuotas * 100) / 100).toFixed(2);
    if(item.discount) {
        let mensaje = item.divisa + " " + priceOff
    
        content = (
            <div className="container ProductPage-p-bottom-0">
            {item.discount &&
                <div className="row p-0 ProductPage-p-bottom-0">
                    <div className="col padding-none">
                            <span className="ProductPage-d-flex">
                                <span><TextLine text={item.divisa} className={"ProductPage-txt-light-grey"}/></span>
                                <del>
                                    <span>
                                        <TextLine text={item.price} className={"ProductPage-txt-light-grey"}/>
                                    </span>
                                </del>
                            </span> 
                    </div>
                </div>
            }
                <div className="row p-0">
                    <div className="col padding-none">
                        <span className="ProductPage-d-flex ProductPage-p-bottom-0">
                            <span><TextLine text={mensaje} className={"txt-black ProductPage-fs-36  m-right-0"}/></span>
                            <span><TextLine text={item.discountRate + "% OFF"} className={"txt-green ProductPage-fs-18 "}/></span>
                        </span>
                        <TextLine text={"en " + item.cantCuotas + "x " + item.divisa + installmentPrice } className={"txt-grey ProductPage-fs-18 ProductPage-p-top-2"}/>
                    </div>
                </div>
        </div>
        )
        
    }else {
        content = (
            <div className="container ProductPage-p-bottom-0">
                <div className="row p-0 ProductPage-p-bottom-0">
                    <div className="col padding-none">
                        <span className="ProductPage-d-flex ProductPage-p-bottom-0">
                            <span><TextLine text={item.divisa + " " +item.price} className={"txt-black ProductPage-fs-36  m-right-0"}/></span>
                        </span>
                        <TextLine text={"en " + item.cantCuotas + "x " + item.divisa + installmentPrice } className={"txt-grey ProductPage-fs-18 ProductPage-p-top-0"}/>
                    </div>
                </div>
            </div>
            
        )
    }

    return (
        <span>
            {content}
            <div className="container ProductPage-p-top-0 ProductPage-p-bottom-0">
                <div className="row ProductPage-p-top-0">
                    <div className="col padding-none">
                        <TextLink  url={url} className={"txt-blue ProductPage-fs-14"} children={"Ver los medios de pago"}/>
                    </div>
                </div>
            </div> 
            
        </span>
    );
}

export default ProductPrice