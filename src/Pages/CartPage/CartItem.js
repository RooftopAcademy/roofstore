import React from "react";
import Icon from "../../Components/Icon";
import TextLine from "../../Components/TextLine";
import TextLink from "../../Components/TextLink";
import { useState } from 'react'
import ModalCartQuantity from "./ModalCartQuantity";

function CartItem ({item, dataTestId=""}) {

    /**
     * Cuando el usuario clickea el boton "comprar" 
     * se despliega una ventana modal que permite elegir la cantidad
     */
    const [ showModal, setShowModal ] = useState(false)

    /**
     * Cantidad de unidades de un producto del carrito
     */
    const [ qty, setQty ] = useState(item.cant)

    const handleOpenModal = () => setShowModal(!showModal)

    const freeShippingText = 'Envío gratis'
    const price = `${item.currencySymbol} ${item.price * item.qty}`
    const fullShippingText = 'FULL'
    const moreFromSeller = 'Ver más productos del vendedor'
    const removeText = 'Eliminar'

    return (
        <div data-testid={dataTestId} className="m-bottom-0 bg-white" >
            <ModalCartQuantity
                data={{stock : item.stock}}

                show={showModal}
                setShow={setShowModal}
                qty={qty}
                setQty={setQty}
            />

            <div className="row br-btm">

                <div className="col">
                    <img className="HomePage-shopping-info-image"
                        src={item.image}
                        alt={item.title}
                    />
                </div>

                <div className="col">
                    <div>
                        <TextLine 
                            className={"txt-grey HomePage-txt-start HomePage-product-item-title HomePage-fs-14"} 
                            text={item.title}
                        />

                        <div>
                            {item.freeShipping  &&
                                <span className="txt-green m-right-0 HomePage-fs-14">
                                    {freeShippingText}
                                    {item.fullShipping  &&
                                        <span className="txt-green txt-bold HomePage-fs-12 m-left-0">
                                            <Icon icon={"lightning"} className={"txt-green"}/>
                                            <span className="txt-green">{` ` + fullShippingText}</span>
                                        </span>
                                    }
                                </span>
                            }
                        </div>

                    </div>

                    <div className="row padding-none m-top-5">
                        <div className="col padding-none">
                            <button className="button CartItem-button round" onClick={handleOpenModal}>
                                <span className="txt-blue">{item.qty} u.</span>
                                <Icon icon="arrow-down" className={"fz-m txt-grey-copyright"} />
                            </button>
                        </div>
                        <div className="col padding-none">
                            <div className="txt-black HomePage-d-flex">
                                <span className="">{price}</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row">
                <button className="txt-blue fz-sm HomePage-border-none bg-white">
                    {removeText}
                </button>
                <TextLink className="fz-sm txt-blue" url="/">
                    {moreFromSeller}
                </TextLink>
                <button className="HomePage-border-none bg-white">
                    <Icon icon="ellipsis-v" className="txt-grey-copyright"/>
                </button>
            </div>

        </div>
    )
}

export default CartItem