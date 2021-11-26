import Navbar from "../Blocks/Navbar"
import TextInput from "../../Components/TextInput"
import TextLink from "../../Components/TextLink"

function InfoFinancialUserPage (){
    const title = 'Información al usuario financiero'
    const initialText = 'Contás con nuestra ayuda para consultas o reclamos en relación a tu crédito de consumo y/o préstamo personal. Tenemos el compromiso de responderte en un plazo máximo de 10 días hábiles a partir de tu contacto.'
    const canaltext = 'Canales'
    const tel = 'Teléfono: +54 11 51290410' // va dos veces! 
    const mail = 'E-mail: usuarios_financieros@mercadopago.com' // va dos veces! 
    const helpPort = 'Portal de Ayuda: Mercado Crédito.'
    const areaRespons = 'Responsables de Area'
    const titular = 'Responsable Titular: Pedro Kudrnac'
    const suplente = 'Responsable Suplente: Mariano Aztiria'
    const direction = 'Dirección: Posta 4789, piso 6 - C1430EKG - Ciudad Autónoma de Buenos Aires'
    const secondText = 'En caso de no estar de acuerdo con nuestra respuesta o si tardamos más de 10 días hábiles en hacerlo, podés comunicarte con la Gerencia Principal de Protección a Usuarios Financieros a través de su sitio: www.usuariosfinancieros.gob.ar.'
    const rights = 'Tus derechos como usuario de servicios financiero:'
    const rates = 'Conocé nuestras tarifas:'
    const ratesText = 'Cargos y comisiones Mercado Libre'
    const prodAndFees = 'Productos y tasas:'
    const prodAndFeesText = 'Líneas de consumo y préstamos personales en Mercado Libre'

    return (
        <InfoFinancialUserPage>
            <Navbar/>
            <TextInput/>
            <h1>{title}</h1>
            <div>
                <div>
                    
                </div>
            </div>
            
        </InfoFinancialUserPage>
        )
}