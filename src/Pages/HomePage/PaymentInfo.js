import { Link } from "react-router-dom"
import Icon from '../../Components/Icon'
import TextLine from '../../Components/TextLine'

function PaymentInfo() {
    
    const title = 'Hasta 6 cuotas sin interés'
    const subtitle = 'Ver promociones bancarias'

    return (
        <Link className={'link'} to={'/login'}>
            <div className="row bg-white HomePage-jc-center">
                <div className="col">
                    <span className={"txt-blue p-0 grey-border HomePage-border-circle"}>
                        <Icon icon={"credit-card"}/>
                    </span>
                </div>
                <div className="col">
                    <TextLine className={"txt-black HomePage-fs-16"} text={title}/>
                    <TextLine className={"txt-blue HomePage-fs-14"} text={subtitle}/>
                </div>
            </div>
        </Link>
    )
}

export default PaymentInfo