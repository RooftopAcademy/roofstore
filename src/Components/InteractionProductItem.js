import TextLine from './TextLine'
import Icon from './Icon'
import { Link } from 'react-router-dom'

function InteractionProductItem({item, favButton = false}) {

    const freeShippingText = 'Envío gratis'
    const badge = '$'
    const price = `${badge} ${item.price}`
    const fullText = ' FULL'
    const installmentsText = "en "
    const sellerText = `por ${item.seller}`
    const deleteText = "Eliminar"

    const handleDeleteButton = (e) => {
        e.preventDefault();
    }

    const handleFavoriteButton = (e) => {
        e.preventDefault();
    }

    return (

        <Link data-testid={"interaction-product-item-link"} className={"link"} to={"/product/" + item.id}>
            <div className={"row bg-white p-0 jc-start ai-start"}>
                <div className="col padding-none">
                    <img className={"HomePage-product-item-image-horizontal"} src={item.image} alt={item.title}/>
                </div>

                <div className={"col padding-none m-left-0 HomePage-flex-grow-1"}>
                    <div className={"row padding-none ai-start"}>
                        <TextLine className={"txt-grey HomePage-txt-start HomePage-product-item-title HomePage-fs-14 m-bottom-0"} text={item.title}/>
                        {favButton &&
                        <button className={"HomePage-border-none bg-white d-flex NavigationPage-margin-top-4"} onClick={handleFavoriteButton}>
                            <Icon className={"txt-blue HomePage-fs-16"} icon={"heart-regular"}/>
                        </button >
                        }
                    </div>
                    
                    <div className="txt-black HomePage-d-flex" data-testid="interaction-product-item-price">
                        <span className="HomePage-fs-20">{price}</span>
                        {item.discount &&
                        <span className="txt-green m-left-0 HomePage-fs-12">{item.discount}</span>
                        }
                    </div>
                    
                    {item.installments  &&
                    <p className="HomePage-fs-12" data-testid="interaction-product-item-installments">
                        <span className="txt-grey">{installmentsText}</span>
                        <span className={"txt-green"}>{item.installments}</span>
                    </p>
                    }

                    {(item.freeShipping || item.fullShipping) &&
                    <p data-testid="interaction-product-item-shipping">
                        {item.freeShipping  &&
                        <span className="txt-green txt-bold m-right-0 HomePage-fs-12">{freeShippingText}</span>
                        }
                        {item.fullShipping  &&
                        <span className="txt-green txt-bold HomePage-fs-12">
                            <Icon icon={"lightning"}/>
                            <span>{fullText}</span>
                        </span>
                        }
                    </p>
                    }

                    {item.seller &&
                    <TextLine className={"txt-grey-copyright HomePage-txt-start HomePage-fs-12"} text={sellerText} data-testid="interaction-product-item-seller"/>
                    }
                    
                    <button className={"HomePage-border-none bg-white txt-blue"} onClick={handleDeleteButton}>
                        {deleteText}
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default InteractionProductItem
