import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";

let content = ""
let priceOff
let priceDescount
let installmentPrice
let url = "/medios-de-pago"


function ProductPrice({ item }) {
    priceOff = item.price - ((item.price * item.discountRate) / 100)
    let precioC = parseFloat(Math.round((item.price / item.cantCuotas) * 100) / 100).toFixed(2);
    installmentPrice = parseFloat(Math.round((priceOff / item.cantCuotas) * 100) / 100).toFixed(2);
    priceDescount = parseFloat(Math.round(priceOff * 100) / 100).toFixed(2);

    if (item.discount) {
        let finalDescountPrice = item.divisa + " " + priceDescount
        let descountPorcent = item.discountRate + "% OFF"
        let descountInstallmentsPrice = "en " + item.cantCuotas + "x " + item.divisa + installmentPrice

        content = (
            <div className="container ProductPage-p-bottom-0">
                {item.discount &&
                    <div className="row p-0 ProductPage-p-bottom-0">
                        <div className="col padding-none">
                            <span className="ProductPage-d-flex">
                                <span><TextLine text={item.divisa} className={"ProductPage-txt-light-grey"} /></span>
                                <del>
                                    <span>
                                        <TextLine text={item.price} className={"ProductPage-txt-light-grey"} />
                                    </span>
                                </del>
                            </span>
                        </div>
                    </div>
                }
                <div className="row p-0">
                    <div className="col padding-none">
                        <span className="ProductPage-d-flex ProductPage-p-bottom-0">
                            <span><TextLine text={finalDescountPrice} className={"txt-black ProductPage-fs-36  m-right-0"} /></span>
                            <span><TextLine text={descountPorcent} className={"txt-green ProductPage-fs-18 "} /></span>
                        </span>
                        <TextLine text={descountInstallmentsPrice} className={"ProductPage-txt-start txt-grey ProductPage-fs-18 ProductPage-p-top-2"} />
                    </div>
                </div>
            </div>
        )

    } else {
        let finalPrice = item.divisa + " " + item.price
        let installmentsPrice = "en " + item.cantCuotas + "x " + item.divisa + precioC
        content = (
            <div className="container ProductPage-p-bottom-0">
                <div className="row p-0 ProductPage-p-bottom-0">
                    <div className="col padding-none">
                        <span className="ProductPage-d-flex ProductPage-p-bottom-0">
                            <span><TextLine text={finalPrice} className={"txt-black ProductPage-fs-36  m-right-0"} /></span>
                        </span>
                        <TextLine text={installmentsPrice} className={"ProductPage-txt-start txt-grey ProductPage-fs-18 ProductPage-p-top-0"} />
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
                        <TextLink url={url} className={"txt-blue ProductPage-fs-14"} children={"Ver los medios de pago"} />
                    </div>
                </div>
            </div>

        </span>
    );
}

export default ProductPrice