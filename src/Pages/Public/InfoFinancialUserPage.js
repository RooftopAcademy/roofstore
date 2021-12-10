import TextPageLayout from "../../Layouts/TextPageLayout"
import TextLink from "../../Components/TextLink"

function InfoFinancialUserPage (){
    const title = 'Información al usuario financiero'
    const initialText = 'Contás con nuestra ayuda para consultas o reclamos en relación a tu crédito de consumo y/o préstamo personal. Tenemos el compromiso de responderte en un plazo máximo de 10 días hábiles a partir de tu contacto.'
    const canaltext = 'Canales'
    const tel = 'Teléfono: +54 11 51290410'
    const mail = 'E-mail: usuarios_financieros@mercadopago.com'
    const helpPort = 'Portal de Ayuda:'
    const port = 'Mercado Crédito.'
    const areaRespons = 'Responsables de Area'
    const titular = 'Responsable Titular: Pedro Kudrnac'
    const suplente = 'Responsable Suplente: Mariano Aztiria'
    const direction = 'Dirección: Posta 4789, piso 6 - C1430EKG - Ciudad Autónoma de Buenos Aires'
    const secondText = 'En caso de no estar de acuerdo con nuestra respuesta o si tardamos más de 10 días hábiles en hacerlo, podés comunicarte con la Gerencia Principal de Protección a Usuarios Financieros a través de su sitio:'
    const secondTextLink = 'www.usuariosfinancieros.gob.ar.'
    const rights = 'Tus derechos como usuario de servicios financiero:'
    const imgBc = "https://http2.mlstatic.com/secure/salesforce-resources/faqs-images/210122131750_01BCRA_Normas2019.jpg"
    const imgBcAlt = "Información sobre derechos del BCRA"
    const imgDownProducts = "https://http2.mlstatic.com/secure/salesforce-resources/faqs-images/210122131750_01BCRA_Normas2019.jpg"
    const imgDownProductsAlt = "Información sobre baja de servicios BCRA"
    const rates = 'Conocé nuestras tarifas:'
    const ratesText = 'Cargos y comisiones Mercado Libre'
    const prodAndFees = 'Productos y tasas:'
    const prodAndFeesText = 'Líneas de consumo y préstamos personales en Mercado Libre'

    return (
        <TextPageLayout showInfoVotation={true} >        
            <div className="row">
                <div className="col txt-bold InfoFinancialUser-title">
                    <p>{title}</p>
                </div>
            </div>
            <div className="container InfoFinancialUser-tag">
                <div className="row">
                    <div className="col">
                        <p>{initialText}</p>
                    </div>
                </div>
                <div className="row py-0">
                    <div className="col">
                        <p className="txt-bold InfoFinancialUser-subtitle">{canaltext}</p>
                        <p>{tel}</p>
                        <p>{mail}</p>
                        <p>{helpPort} <TextLink url={'/login'}>{port}</TextLink></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="txt-bold InfoFinancialUser-subtitle">{areaRespons}</p>
                        <p>{titular}</p>
                        <p>{suplente}</p>
                        <p>{direction}</p>
                        <p>{mail}</p>
                        <p>{tel}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{secondText}</p> 
                        <TextLink url={'/login'}>{secondTextLink}</TextLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="txt-bold InfoFinancialUser-subtitle">{rights}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="w-100" src={imgBc} alt={imgBcAlt}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="w-100" src={imgDownProducts} alt={imgDownProductsAlt}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="txt-bold InfoFinancialUser-subtitle">{rates}</p>
                        <TextLink url="/login">{ratesText}</TextLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="txt-bold InfoFinancialUser-subtitle">{prodAndFees}</p>
                        <TextLink url="/login">{prodAndFeesText}</TextLink>
                    </div>
                </div>
            </div> 
        </TextPageLayout>
        )
}
export default InfoFinancialUserPage