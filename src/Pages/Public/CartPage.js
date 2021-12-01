import React, { useEffect, useState } from "react";
import WebsiteLayout from "../../Layouts/WebsiteLayout";
import CartItem from "../CartPage/CartItem";
import CartTotal from "../CartPage/CartTotal";
import FeaturedProductsBlock from "./ProductPage/Block/FeaturedProductsBlock";
import { MOCK_PRODUCTOS_PROMOCIONADOS } from '../Public/ProductPage/mockData' 
import axios from "axios";

function CartPage () {

    const [products, setProducts] = useState([])
    const [priceTotal, setPriceTotal] = useState(0)

    const fetchProductCart = async () => {
        const response = await axios.get('http://localhost:3000/data/productCartData.json')
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProductCart()
    }, [])

    useEffect(() => {
        let total = 0
        products.forEach(item => total+= item.price * item.cant)
        setPriceTotal(total)
    },[products])  

    return (
        <WebsiteLayout>
            <div>

                <div data-testid="hola" className="row padding-none bg-primary">
                    <div className="col OffersPage-6-col txt-white txt-center ChooseItemTitle-border-blue-bottom">
                        Carrito ({products.length})
                    </div>
                    <div className="col OffersPage-6-col txt-white txt-center">
                        Guardado (0)
                    </div>
                </div>

                <div className="bg-main">
                    {products.map((product, index) => {
                        return(
                            <CartItem
                                key={product.id}
                                item = {product}
                                dataTestId = {`cart-product-${index}`}
                            />
                        )
                    })}

                    <CartTotal priceTotal={priceTotal} />
                    <div className="SearchHelp-m-3-top">
                        <FeaturedProductsBlock
                            title="Productos que te interesaron" 
                            products={MOCK_PRODUCTOS_PROMOCIONADOS}
                        />
                    </div>
                </div>


            </div>
        </WebsiteLayout>
    )
}

export default CartPage