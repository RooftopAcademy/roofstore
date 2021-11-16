/**
 * header: logo
 * footer: copyright
 */

import TextLine from "../Components/TextLine"

function DistractionFreeLayout({ children, className }) {
    const footerText = 'Cuidamos tu privacidad'
    const copyright = 'Copyright © 1999-2021 MercadoLibre S.R.L.'

    return (
        <div className={`d-flex vh-100 ${className}`}>
            <div className="row h-header bg-primary padding-none">
                <div className="col">
                    <a href="/"><img className="logo-footer" src="https://rooftop.dev/images/favicon.png" alt="Rooftop Logo" /> </a>
                </div>
            </div>
            {children}
            <div className="row br-top d-flex jc-center padding-none">
                <div className="col">
                    <TextLine className="order-top-footer fz-sm" text={footerText} />
                    <TextLine className="order-top-footer fz-xsm txt-grey-copyright" text={copyright} />
                </div>
            </div>
        </div>
    )
}

export default DistractionFreeLayout