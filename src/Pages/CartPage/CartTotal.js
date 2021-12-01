import React from "react";
import TextLink from "../../Components/TextLink";

function CartTotal ({priceTotal}) {
    return (
        <div className="bg-white CartTotal-container">
            
            <div className="row m-top-5 br-btm">
                <TextLink url="/" className="txt-blue fz-sm">
                    ¿Cuál es el costo de envío?
                </TextLink>
            </div>
           
            <div className="">

                <div className="row">
                    <p>Total con envío</p>
                    <span data-testid="price-total">$ {priceTotal.toFixed(2)}</span>
                </div>
                <div className="row">
                    <button className="button w-100 p-0 txt-white bg-blue HomePage-border-none round fz-m">
                        Continuar compra
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CartTotal