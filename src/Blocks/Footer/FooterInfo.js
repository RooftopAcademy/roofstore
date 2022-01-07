import TextLink from "../../Components/TextLink"
import TextLine from "../../Components/TextLine"

function FooterInfo() {

    const termsAndConditionText = 'Términos y condiciones'
    const privacyText = 'Cómo cuidamos tu privacidad'
    const consumerDefenseText = 'Defensa del Consumidor'
    const userInformation = 'Información al usuario financiero'
    const developmentGroupText = '© 1999-2021 Roofstore S.R.L.'
    const locationText = 'Hipólito Yrigoyen 33, San Francisco, Cordoba'

    return (
        <div className='row'>
            <div className='col'>
                <TextLink url={'/ayuda/terminos-y-condiciones'} className={'txt-black m-right-0'}>{termsAndConditionText}</TextLink>
                <TextLink url={'/privacy'} className={'txt-black m-right-0'}>{privacyText}</TextLink>
                <TextLink url={'/ayuda/defensa-del-consumidor'} className={'txt-black m-right-0'}>{consumerDefenseText}</TextLink>
                <TextLink url={'/financial-user-info'} className={'txt-black m-right-0'}>{userInformation}</TextLink>
                <TextLine className={'txt-light-grey m-top-0 Footer-txt-start'} text={developmentGroupText}/>
                <TextLine className={'txt-light-grey Footer-txt-start'} text={locationText}/>
            </div>
        </div>
    )
}

export default FooterInfo