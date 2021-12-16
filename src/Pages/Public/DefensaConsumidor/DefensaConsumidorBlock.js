import TextLink from "../../../Components/TextLink"
import DefensaConsumidorItem from "./DefensaConsumidorItem"

function DefensaConsumidorBlock() {
  return (
    <div className="row ProductPage-bg-light-grey padding-none">
      <div className="col DefensaConsumidor-container">
        {/* Indice  */}
        <section className="row">
          <div className="col">
            <h2 className="DefensaConsumidor-title m-bottom-4">
              Defensa del Consumidor
            </h2>
            <h3 className="DefensaConsumidor-indice-subtitle DefensaConsumidor-subtitle">
              Índice
            </h3>
            <ul className="DefensaConsumidor-list-inside">
              <li className="m-bottom-4">
                <TextLink url={"/"}>
                  Denuncias en Defensa del Consumidor
                </TextLink>
              </li>
              <li>
                <TextLink url={"/"}>Avisos Legales</TextLink>
              </li>
            </ul>
          </div>
        </section>

        {/* ITEMS */}
        <section>
          {/* ITEMS 1 */}
          <DefensaConsumidorItem title={"Denuncias en Defensa del Consumidor"}>
            <p>
              Cualquier persona usuaria que tenga un problema con los servicios
              ofrecidos por Roofstore podrá iniciar un reclamo. Para
              hacerlo, tendrá que ingresar a su cuenta con su usuario y
              contraseña y buscar la sección de Ayuda. Podrá contactar al
              Vendedor para intentar solucionar el problema o incluso solicitar
              la intervención de Roofstore.{" "}
            </p>
            <p>
              Para las compras en la plataforma de Roofstore, si la
              resolución de un reclamo no fuera satisfactoria, podrá continuar
              con el reclamo ante el{" "}
              <TextLink url="/">Defensor del Cliente de Roofstore</TextLink>
              .
            </p>
            <p>
              Además, siempre podrá{" "}
              <TextLink url="/">
                hacer una denuncia en el Portal de Defensa de las y los
                Consumidores
              </TextLink>
              ; y para residentes en la Ciudad Autónoma de Buenos Aires,{" "}
              <TextLink url="/">
                podrá hacer una denuncia ante Defensa del Consumidor
              </TextLink>
              . Ante cualquier duda, siempre podrá{" "}
              <TextLink url="/">
                consultar la Ley de Defensa del Consumidor
              </TextLink>
              .
            </p>
          </DefensaConsumidorItem>
          {/* ITEMS 2 */}
          <DefensaConsumidorItem
            title={"Avisos Legales"}
            lastModifiedDate={"01/10/2020"}
          >
            <p className="txt-bold">
              Resolución 244/2020 de la Secretaría de Comercio Interior del
              Ministerio de Desarrollo Productivo{" "}
            </p>
            <p>
              Dispone que los plazos previstos en las garantías contractuales y
              legales en los términos de la Ley N° 24.240 se tienen por
              suspendidos por todo el periodo en que los consumidores se hayan
              visto imposibilitados de ejercer sus derechos en virtud del
              Aislamiento Social, Preventivo y Obligatorio dictado por el
              Decreto Nº 297 de fecha 19 de marzo de 2020 y sus modificatorios.
            </p>
            <p>
              Accedé a la norma completa:{" "}
              <TextLink url="/">Resolución 244/2020</TextLink>
            </p>
          </DefensaConsumidorItem>
        </section>
      </div>
    </div>
  )
}

export default DefensaConsumidorBlock
