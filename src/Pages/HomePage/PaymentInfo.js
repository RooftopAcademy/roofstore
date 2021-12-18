import { Link } from "react-router-dom"
import TextLine from '../../Components/TextLine'

function PaymentInfo() {
    
    const title = 'Hasta 6 cuotas sin interés'
    const subtitle = 'Ver promociones bancarias'
    const image = '/credit-card.svg'

    return (
        <Link className={'link'} to={'/login'}>
            <div className="row bg-white HomePage-jc-center TextPageLayout-p-container">
                <div className="col padding-none m-right-5">
                    <img className="HomePage-img" src={image} alt={title}></img>
                </div>
                <div className="col padding-none">
                    <TextLine className={"txt-black HomePage-fs-16 HomePage-txt-start"} text={title}/>
                    <TextLine className={"txt-blue HomePage-fs-14 HomePage-txt-start"} text={subtitle}/>
                </div>
            </div>
        </Link>
    )
}

export default PaymentInfo