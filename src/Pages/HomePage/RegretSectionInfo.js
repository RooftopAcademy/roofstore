import TextLine from '../../Components/TextLine'
import TextLink from '../../Components/TextLink'

function RegretSectionInfo () {

    const title = 'Botón de arrepentimiento'
    const cancelBuyText = 'Cancelar una compra'
    const cancelSubscriptionText = 'Cancelar una suscripción'
    const rulesText = 'Conocé las normas que aplican cuando comprás'
    const adhesionContractText = 'Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor'

    return (
        <div className="row bg-white padding-none">
            <div className="col HomePage-col-12">
                <div className="row fd-col grey-border rounded m-bottom-0">
                    <TextLine className={"txt-grey HomePage-fs-14"} text={title}/>
                    <TextLink url={'/login'} className={'txt-blue HomePage-fs-14'}>{cancelBuyText}</TextLink>
                    <TextLink url={'/login'} className={'txt-blue HomePage-fs-14'}>{cancelSubscriptionText}</TextLink>
                </div>
                <div className="row fd-col grey-border rounded">
                    <TextLine className={"txt-grey HomePage-fs-14"} text={rulesText}/>
                    <TextLink url={'/login'} className={'txt-blue txt-center HomePage-fs-14'}>{adhesionContractText}</TextLink>
                </div>
            </div>
        </div>
    )
}

export default RegretSectionInfo