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
    const imgBc = 'public/210122132030_05BCRA_Normas2019.jpg'
    const imgDownProducts = 'public/210122131750_01BCRA_Normas2019.jpg'
    const rates = 'Conocé nuestras tarifas:'
    const ratesText = 'Cargos y comisiones Mercado Libre'
    const prodAndFees = 'Productos y tasas:'
    const prodAndFeesText = 'Líneas de consumo y préstamos personales en Mercado Libre'

    return (
        <TextPageLayout showInfoVotation={true}>
            <InfoFinancialUserPage>
                <div className="row">
                    <div className="col">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>{initialText}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{canaltext}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{tel}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{mail}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{helpPort}</p>
                            <TextLink url={'/login'}>{port}</TextLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{areaRespons}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{titular}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{suplente}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{direction}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{mail}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{tel}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{secondText}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextLink>{secondTextLink}</TextLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{rights}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={imgBc}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={imgDownProducts}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{rates}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextLink url="/login">{ratesText}</TextLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{prodAndFees}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextLink url="/login">{prodAndFeesText}</TextLink>
                        </div>
                    </div>
                </div>
            </InfoFinancialUserPage>
        </TextPageLayout>
        )
}
export default InfoFinancialUserPage