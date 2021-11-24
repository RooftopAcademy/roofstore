/**
 * header: logo
 * footer: copyright
 */

import TextLine from "../Components/TextLine"

function DistractionFreeLayout({ children, isFooter }) {
    const footerText = 'Cuidamos tu privacidad'
    const copyright = 'Copyright © 1999-2021 MercadoLibre S.R.L.'
    const logoUrl = 'https://rooftop.dev/images/favicon.png'
    const logoAlt = 'Rooftop Logo'
    return (
        <div className="d-flex vh-100 fd-col">
            <div className="row h-header bg-primary padding-none">
                <div className="col">
                    <a href="/"><img className="logo-footer" src={logoUrl} alt={logoAlt} /> </a>
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