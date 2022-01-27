/**
 * header: logo
 * footer: copyright
 */

import { Link } from "react-router-dom"
import TextLine from "../Components/TextLine"

function DistractionFreeLayout({ children, isFooter }) {
    const footerText = 'Cuidamos tu privacidad'
    const copyright = 'Copyright © 1999-2021 Roofstore'
    const logoUrl = '/images/rooftop-favicon.png'
    const logoAlt = 'Roofstore Logo'
    return (
        <div className="d-flex vh-100 fd-col">
            <div className="row h-header bg-primary padding-none">
                <div className="col">
                    <Link to="/"><img className="logo-footer" src={logoUrl} alt={logoAlt} /> </Link>
                </div>
            </div>
            {children}
            {isFooter ?
                <div className="row br-top d-flex jc-center padding-none">
                    <div className="col">
                        <TextLine className="order-top-footer fz-sm" text={footerText} />
                        <TextLine className="order-top-footer fz-xsm txt-grey-copyright" text={copyright} />
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default DistractionFreeLayout