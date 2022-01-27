import React, { useState } from "react";
import Icon from "../../Components/Icon";
import SubscriptionCard from "../HomePage/SubscriptionCard";
import TextLine from "../../Components/TextLine";
import TextLink from "../../Components/TextLink";
import WebsiteLayout from "../../Layouts/WebsiteLayout";
import CardLayoutWhitLogo from "./CardLayoutWhitLogo";
import CardLocalStore from "./CardLocalStore";
import CardLockedLevels from "./CardLockedLevels";
import LevelCart from "./LevelCard";
import PartnerCard from "./PartnerCard";
import WelcomeCard from "./WelcomeCard";
import useFetch from "../../hooks/useFetch";
import { getLocalStores } from "../../requests/stores";
import { getMoviesAndSeries, getNextLevelBenefit } from "../../requests/mercadoPunto";
import { LocalStore } from "../../types/stores";

function MarketPointPage () {

  const {data: subscriptions} = useFetch(getMoviesAndSeries)
  const {data: stores}: {data: Array<LocalStore> | null} = useFetch(getLocalStores)
  const {data: nextLevelBenefit} = useFetch(getNextLevelBenefit)
  const [showWelcome, setShowWelcome] = useState(true)

  const closeWelcome = () => {
    setShowWelcome(false)
  }

  return (
    <WebsiteLayout>
      <div className="bg-main w-100">

        <div className="MenuMobile-p-1-horizontal pt-3 OffersPage-p-relative bg-main">
          <div className="bg-primary ChooseCategoryItem-arrow-left w-100 h-80"></div>
          <LevelCart/>
        </div>

        { showWelcome? <WelcomeCard closeWelcome={closeWelcome} /> : '' }

        <SubscriptionCard
          title="Los mejores beneficios están en el nivel 6, ¡suscribete!"
          titleClass="fz-m"
        >
          <div className="d-flex fd-col">
            <div className="row bg-blue-dark txt-white">
              <div className="col">
                <p className="txt-bold fz-l m-bottom-5">
                  $ 1.199<span className="fz-m">/mes</span>
                </p>
                <p className="fz-sm">
                  Tu suscripción anual incluye Disney+ y Star+ sin cargo
                  y miles de descuentos en tus compras, envíos y pagos.
                </p>
              </div>
            </div>
            <img className="w-100" 
              src="/images/disney-banner.png"
              alt="Disney+ y Star+"
            />
            <div className="row bg-blue-dark border-radius-bottom">
              <button className="button MenuMobile-btn py-2 bg-blue rounded txt-white txt-bold">
                Suscribete
              </button>
            </div>
          </div>
        </SubscriptionCard>

        <div className="row fd-col ai-start">
          <TextLine text="Beneficios por tu nivel" className="txt-bold HomePage-txt-start m-bottom-5"/>

          <span className="d-flex ai-center m-top-5">
            <Icon icon="tv" className="m-right-2"/>
            <p>Descuentos en películas y series</p>
          </span>

          {subscriptions? <PartnerCard suscriptions={subscriptions} /> : ""}

          <span className="d-flex ai-center m-top-5">
            <div className="d-flex m-right-2 icon-percentage">
              <Icon icon="percent" />
            </div>
            <p >Más descuentos</p>
          </span>

          <CardLayoutWhitLogo
            download={true}
            logoDownload="https://rooftop.dev/images/favicon.png"
            icon="money" 
            tag="NUEVO"
            title="Descuentos pagando con Roofstore Pago en tus locales favoritos"
            titleDownload="Exclusivo con la app de Roofstore Pago"
          >
            <div className="row px-6">
              {stores ? (stores as LocalStore[]).map((store: LocalStore, index: number) => {
                return( <CardLocalStore store={store} key={index} /> )
              }) : ""}
            </div>
          </CardLayoutWhitLogo>

          <CardLayoutWhitLogo
            icon="truck"
            title="Envíos gratis desde $ 3.500 en miles de productos nuevos"
            textLink="Conocer más sobre envíos"
          />

          <CardLayoutWhitLogo
            icon="devolution"
            title="Devoluciones gratis"
            subtitle={`Si te arrepentís o tenés un problema con tu compra,
              contás con 30 días desde que te llega para devolver`
            }
            textLink="Conocer más sobre devoluciones"
          />

          <p className="m-top-5">Beneficios de los proximos niveles</p>
          
          {nextLevelBenefit? <CardLockedLevels nextLevelBenefit={nextLevelBenefit} textLink="Ver todos los beneficios"/> : ""}

        </div> 

        <div className="row bg-light-grey">
          <TextLink url="/" className="fz-xsm txt-blue w-100 txt-center">
            Términos y Condiciones
          </TextLink>
        </div>

      </div>
    </WebsiteLayout>
  )
}

export default MarketPointPage