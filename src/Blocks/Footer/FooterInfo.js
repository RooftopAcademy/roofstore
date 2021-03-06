import TextLink from "../../Components/TextLink"
import TextLine from "../../Components/TextLine"

function FooterInfo() {
    return (
        <div className='row'>
            <div className='col'>
                <TextLink url={'/ayuda/terminos-y-condiciones'} className={'txt-black m-right-0'}>Términos y condiciones</TextLink>
                <TextLink url={'/privacy'} className={'txt-black m-right-0'}>Cómo cuidamos tu privacidad</TextLink>
                <TextLink url={'/ayuda/defensa-del-consumidor'} className={'txt-black m-right-0'}>Defensa del Consumidor</TextLink>
                <TextLink url={'/financial-user-info'} className={'txt-black m-right-0'}>Información al usuario financiero</TextLink>
                <TextLine className={'txt-light-grey m-top-0 Footer-txt-start'} text={'© 1999-2021 MercadoLibre S.R.L.'}/>
                <TextLine className={'txt-light-grey Footer-txt-start'} text={'Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA'}/>
            </div>
        </div>
    )
}

export default FooterInfo