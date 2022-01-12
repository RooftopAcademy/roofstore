import React, { useEffect, useState } from "react";
import WebsiteLayout from "../../Layouts/WebsiteLayout";
import CartItem from "../CartPage/CartItem";
import CartTotal from "../CartPage/CartTotal";
import FeaturedProductsBlock from "./ProductPage/Block/FeaturedProductsBlock";
import axios from "axios";

function CartPage () {

    const [cart, setCart] = useState({items : []})

    const cartText = 'Carrito'
    const savedText = 'Guardado'
    const cartUrl = '/data/cart.json'

    const fetchCart = () => axios.get(cartUrl).then(({data}) => setCart(data))

    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <WebsiteLayout>
            <div>
                <div data-testid="hola" className="row padding-none bg-primary">
                    <div className="col OffersPage-6-col txt-white txt-center ChooseItemTitle-border-blue-bottom">
                        {cartText} ({cart.totalItems})
                    </div>
                    <div className="col OffersPage-6-col txt-white txt-center">
                        {savedText} (0)
                    </div>
                </div>

                <div className="bg-main">
                    {cart.items.map((product, index) => {
                        return(
                            <CartItem
                                key={product.id}
                                item={product}
                                dataTestId={`cart-product-${index}`}
                            />
                        )
                    })}

                    <CartTotal priceTotal={cart.finalPrice} />
                    
                    <div className="SearchHelp-m-3-top">
                        <FeaturedProductsBlock
                            title="Productos que te interesaron" 
                        />
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    )
}

export default CartPage