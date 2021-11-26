import React from "react"
import TextLink from "../../../Components/TextLink"
import DistractionFreeLayout from "../../../Layouts/DistractionFreeLayout"
import DefensaConsumidorItem from "./DefensaConsumidorItem"

function DefensaConsumidorPage() {
  return (
    <DistractionFreeLayout isFooter={true}>
      <div className="row padding-none">
        <div className="col ProductPage-bg-light-grey">
          {/* Indice  */}
          <section className="row">
            <div className="col">
              <h2 className="title">Defensa del Consumidor</h2>
              <h3>Índice</h3>
              <ul>
                <li>
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
            <DefensaConsumidorItem
              title={"Denuncias en Defensa del Consumidor"}
            >
              <p>
                Cualquier persona usuaria que tenga un problema con los
                servicios ofrecidos por Mercado Libre podrá iniciar un reclamo.
                Para hacerlo, tendrá que ingresar a su cuenta con su usuario y
                contraseña y buscar la sección de Ayuda. Podrá contactar al
                Vendedor para intentar solucionar el problema o incluso
                solicitar la intervención de Mercado Libre.{" "}
              </p>
              <p>
                Para las compras en la plataforma de Mercado Libre, si la
                resolución de un reclamo no fuera satisfactoria, podrá continuar
                con el reclamo ante el{" "}
                <TextLink url="/">
                  Defensor del Cliente de Mercado Libre
                </TextLink>
                .
              </p>
              <p>
                Además, siempre podrá hacer una denuncia en el Portal de Defensa
                de las y los Consumidores; y para residentes en la Ciudad
                Autónoma de Buenos Aires, podrá{" "}
                <TextLink url="/">hacer una denuncia ante Defensa</TextLink>
                del Consumidor. Ante cualquier duda, siempre podrá consultar la
                Ley de Defensa del Consumidor.
              </p>
            </DefensaConsumidorItem>
            {/* ITEMS 2 */}
            <DefensaConsumidorItem
              title={"Avisos legales"}
              lastModifiedDate={"01/10/2020"}
            >
              <p className="txt-bold">
                Resolución 244/2020 de la Secretaría de Comercio Interior del
                Ministerio de Desarrollo Productivo{" "}
              </p>
              <p>
                Dispone que los plazos previstos en las garantías contractuales
                y legales en los términos de la Ley N° 24.240 se tienen por
                suspendidos por todo el periodo en que los consumidores se hayan
                visto imposibilitados de ejercer sus derechos en virtud del
                Aislamiento Social, Preventivo y Obligatorio dictado por el
                Decreto Nº 297 de fecha 19 de marzo de 2020 y sus
                modificatorios.
              </p>
              <p>Accedé a la norma completa: Resolución 244/2020</p>
            </DefensaConsumidorItem>
          </section>
        </div>
      </div>
    </DistractionFreeLayout>
  )
}

export default DefensaConsumidorPage
