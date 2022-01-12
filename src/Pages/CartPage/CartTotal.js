import React from "react";
import TextLink from "../../Components/TextLink";

function CartTotal ({priceTotal}) {
    let shippingCostText = '¿Cuál es el costo de envío?'
    let totalShippingCostText = 'Total con envío'
    let currencySymbol = '$'
    let startBuyingText = 'Continuar compra'

    return (
        <div className="bg-white CartTotal-container">
            <div className="row m-top-5 br-btm">
                <TextLink url="/" className="txt-blue fz-sm">
                    {shippingCostText}
                </TextLink>
            </div>
           
            <div className="">
                <div className="row">
                    <p>{totalShippingCostText}</p>
                    <span data-testid="price-total">{currencySymbol} {priceTotal}</span>
                </div>
                <div className="row">
                    <button className="button w-100 p-0 txt-white bg-blue HomePage-border-none round fz-m">
                        {startBuyingText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartTotal