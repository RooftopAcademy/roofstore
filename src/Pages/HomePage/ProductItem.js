import TextLine from '../../Components/TextLine'
import Icon from '../../Components/Icon'
import { Link } from 'react-router-dom'

function ProductItem({item, orientation = 'vertical', dataTestId = ''}) {

    const freeShippingText = 'Envío gratis'
    const badge = '$'
    const price = `${badge} ${item.price}`
    const fullText = ' FULL'

    let classes = {
        'direction': "fd-col",
        'imageSize': "HomePage-product-item-image",
        'marginLeft': ""
    }

    if (orientation === 'horizontal') {
        classes = {
            'direction': "",
            'imageSize': "HomePage-product-item-image-horizontal",
            'marginLeft': "m-left-0"
        }
    }

    return (
        <Link data-testid={dataTestId} className={'link br-btm'} to={"/product/" + item.id}>
            <div className={`row p-0 ${classes.direction}`}>
                <img className={`${classes.imageSize}`} src={item.image} alt={item.title}/>

                <div className={classes.marginLeft}>
                    <TextLine className={"txt-grey HomePage-txt-start HomePage-product-item-title HomePage-fs-14"} text={item.title}/>
                    
                    <div className="txt-black HomePage-d-flex">
                        <span className="HomePage-fs-24">{price}</span>
                        {item.discount &&
                        <span className="txt-green m-left-0 HomePage-fs-12">{item.discount}</span>
                        }
                    </div>
                    
                    {item.installments  &&
                    <TextLine className={"txt-green HomePage-txt-start HomePage-fs-14"} text={item.installments}/>
                    }

                    <div>
                        {item.freeShipping  &&
                        <span className="txt-green txt-bold m-right-0 HomePage-fs-14">{freeShippingText}</span>
                        }
                        {item.fullShipping  &&
                        <span className="txt-green txt-bold HomePage-fs-12">
                            <Icon icon={"lightning"}/>
                            <span>{fullText}</span>
                        </span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem