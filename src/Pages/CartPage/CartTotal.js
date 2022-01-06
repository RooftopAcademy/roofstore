import React from "react";
import TextLink from "../../Components/TextLink";

function CartTotal ({priceTotal}) {

    const costOfShippingText = '¿Cuál es el costo de envío?'
    const totalShippingText = 'Total con envío'
    const continueShoppingText = 'Continuar compra'

    return (
        <div className="bg-white CartTotal-container">
            
            <div className="row m-top-5 br-btm">
                <TextLink url="/" className="txt-blue fz-sm">
                    {costOfShippingText}
                </TextLink>
            </div>
           
            <div className="">

                <div className="row">
                    <p>{totalShippingText}</p>
                    <span data-testid="price-total">$ {priceTotal.toFixed(2)}</span>
                </div>
                <div className="row">
                    <button className="button w-100 p-0 txt-white bg-blue HomePage-border-none round fz-m">
                        {continueShoppingText}
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CartTotal