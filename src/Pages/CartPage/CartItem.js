import React from "react";
import Icon from "../../Components/Icon";
import TextLine from "../../Components/TextLine";
import TextLink from "../../Components/TextLink";
import { useState } from 'react'
import ModalCartQuantity from "./ModalCartQuantity";

function CartItem ({item, dataTestId=""}) {
    const [ showModal, setShowModal ] = useState(false)

    const handleOpenModal = () => {
        return setShowModal(!showModal)
    }

    const freeShippingText = 'Envío gratis'
    const badge = '$'
    const price = `${badge} ${item.price * item.cant}`
    const fullText = ' FULL'

    return (
        <div data-testid={dataTestId} className="m-bottom-0 bg-white" >
            <ModalCartQuantity
                useState={{ showModal, setShowModal }}
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
                                            <span className="txt-green">{fullText}</span>
                                        </span>
                                    }
                                </span>
                            }
                        </div>

                    </div>

                    <div className="row padding-none m-top-5">
                        <div className="col padding-none">
                            <button className="button CartItem-button round" onClick={handleOpenModal}>
                                <span className="txt-blue">{item.cant} u.</span>
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
                <button className="txt-blue fz-sm HomePage-border-none bg-white">Eliminar</button>
                <TextLink className="fz-sm txt-blue" url="/">
                    Ver más productos del vendedor
                </TextLink>
                <button className="HomePage-border-none bg-white">
                    <Icon icon="ellipsis-v" className="txt-grey-copyright"/>
                </button>
            </div>

        </div>
    )
}

export default CartItem