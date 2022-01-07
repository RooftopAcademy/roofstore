import TextLink from "../../../Components/TextLink"
import ConsumerDefenseItem from "./ConsumerDefenseItem"

function ConsumerDefenseBlock() {
  const consumerDefenseText = 'Defensa del Consumidor'
  const indexText = 'Índice'
  const complaintsDefenseComsumerText = 'Denuncias en Defensa del Consumidor'
  const legalNoticesText = 'Avisos Legales'
  const claimNoticeText = `Cualquier persona usuaria que tenga un problema con los servicios
  ofrecidos por Roofstore podrá iniciar un reclamo. Para
  hacerlo, tendrá que ingresar a su cuenta con su usuario y
  contraseña y buscar la sección de Ayuda. Podrá contactar al
  Vendedor para intentar solucionar el problema o incluso solicitar
  la intervención de Roofstore.`
  const unsatisfactoryClaimText = `Para las compras en la plataforma de Roofstore, si la
  resolución de un reclamo no fuera satisfactoria, podrá continuar
  con el reclamo ante el`
  const roofstoreCustomerAdvocate = 'Defensor del Cliente de Roofstore.'
  const youCanAlways = 'Además, siempre podrá'
  const makeReportText = ' hacer una denuncia en el Portal de Defensa de las y los Consumidores'
  const resdentsBuenosAiresText = '; y para residentes en la Ciudad Autónoma de Buenos Aires,'
  const makeComplaintText = ' podrá hacer una denuncia ante Defensa del Consumidor'
  const anyQuestionsText = '. Ante cualquier duda, siempre podrá'
  const consultConsumerProtectionLawText = ' consultar la Ley de Defensa del Consumidor.'
  const lastModifiedDate = '01/10/2020'
  const resolutionTwoFourFourTitleText = 'Resolución 244/2020 de la Secretaría de Comercio Interior del Ministerio de Desarrollo Productivo'
  const resolutionTwoFourFourBodyText = 'Dispone que los plazos previstos en las garantías contractuales y legales en los términos de la Ley N° 24.240 se tienen por suspendidos por todo el periodo en que los consumidores se hayan visto imposibilitados de ejercer sus derechos en virtud del Aislamiento Social, Preventivo y Obligatorio dictado por el Decreto Nº 297 de fecha 19 de marzo de 2020 y sus modificatorios.'
  const accessCompleteruleText = 'Accedé a la norma completa:'
  const resolutionTwoFourFourText = ' Resolución 244/2020'

  return (
    <div className="row ProductPage-bg-light-grey padding-none">
      <div className="col DefensaConsumidor-container">
        <section className="row">
          <div className="col">
            <h2 className="DefensaConsumidor-title m-bottom-4">
              {consumerDefenseText}
            </h2>
            <h3 className="DefensaConsumidor-indice-subtitle DefensaConsumidor-subtitle">
              {indexText}
            </h3>
            <ul className="DefensaConsumidor-list-inside">
              <li className="m-bottom-4">
                <TextLink url={"/"}>
                  {complaintsDefenseComsumerText}
                </TextLink>
              </li>
              <li>
                <TextLink url={"/"}>{legalNoticesText}</TextLink>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <ConsumerDefenseItem title={complaintsDefenseComsumerText}>
            <p>
              {claimNoticeText}
              <br/><br/>
              {unsatisfactoryClaimText}
              <TextLink url="/"> {roofstoreCustomerAdvocate}</TextLink>
              <br/><br/>
              {youCanAlways}
              <TextLink url="/">{makeReportText}</TextLink>
              {resdentsBuenosAiresText}
              <TextLink url="/">{makeComplaintText}</TextLink>
              {anyQuestionsText}
              <TextLink url="/">{consultConsumerProtectionLawText}</TextLink>
            </p>
          </ConsumerDefenseItem>

          <ConsumerDefenseItem
            title={legalNoticesText}
            lastModifiedDate={lastModifiedDate}
          >
            <p className="txt-bold">{resolutionTwoFourFourTitleText}</p>
            <p>{resolutionTwoFourFourBodyText}</p>
            <p>
              {accessCompleteruleText}
              <TextLink url="/">{resolutionTwoFourFourText}</TextLink>
            </p>
          </ConsumerDefenseItem>
        </section>

      </div>
    </div>
  )
}

export default ConsumerDefenseBlock
