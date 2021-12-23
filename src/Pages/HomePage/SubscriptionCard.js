import CardFooterLink from "./CardFooterLink"

function SubscriptionCard(
    {
        children, 
        title, 
        price, 
        period, 
        footerLinkUrl, 
        titleClass= "HomePage-fs-24"
    }) {

    const footerLinkText = 'Suscribite'

    return (
        <div className="row">
            <div className="col HomePage-col-12 bg-white shadow-sm rounded padding-none HomePage-d-flex fd-col">
                
                {/* Header */}
                <div className="row p-0 bg-primary HomePage-br-top-radius txt-white txt-bold HomePage-subscription-card-header-bg">
                    <div 
                        className={
                            `col padding-none  
                            ${price? 'HomePage-subscription-card-title' : ''}
                            ${titleClass} `
                        }>
                        {title}
                    </div>
                    <div className="col padding-none">
                        { price? <span className="HomePage-fs-24">{`$ ${price}`}</span> : '' }
                        { period? <p className="HomePage-fs-12">{period}</p> : '' }
                    </div>
                </div>

                {children}

                {/* Footer Link */}
                {footerLinkUrl? 
                    <div className="br-top">
                        <CardFooterLink text={footerLinkText} url={footerLinkUrl}/>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}

export default SubscriptionCard
