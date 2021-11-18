import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'

function ShoppingInfo() {

    const image = 'https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg'
    const title = 'Elegí cómo pagar'
    const subtitle = 'Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.'
    const textLink = 'Cómo pagar tus compras'

    return (
        <div className="row bg-white">
            <div className="col HomePage-col-12 row fd-col">
                <div className="HomePage-shopping-info-image">
                    <img className="HomePage-img" src={image} alt={title}/>
                </div>
                <TextLine className={"txt-black m-top-3 HomePage-fs-20"} text={title}/>
                <TextLine className={"txt-grey HomePage-fs-14"} text={subtitle}/>
                <TextLink url={'/login'} className={'txt-blue m-top-0 HomePage-fs-14'}>{textLink}</TextLink>
            </div>
        </div>
    )
}

export default ShoppingInfo