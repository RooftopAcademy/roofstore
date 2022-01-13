import React from "react";
import Icon from "../../Components/Icon";
import TextLink from "../../Components/TextLink";
import TextTag from "../../Components/TextTag";

function PartnerCard ({subscriptions}) {
  const offText = 'OFF'
  const activarText = 'Activar'

  return(
    <>
      {
        subscriptions?.map((suscription, index) => {
          return (
          <div className="bg-white w-100 rounded my-3 shadow-m" key={index}>
            <div className="row pb-0">

              <div className="col d-flex ai-center pb-0">
                <img src={suscription.partner.logo} alt={suscription.partner.name} width="45px" />
                <div className="d-flex fd-col m-left-3 HomePage-line-height-18">
                  <p className="txt-bold">{suscription.partner.name}</p>
                  <p className="fz-xsm">{suscription.partner.type}</p>
                </div>
              </div>

              <div className="col txt-end pb-0">
                <p><span className="txt-bold">{suscription.partner.offer}</span>{offText}</p>
                <TextTag text={`${suscription.partner.offer_day} DÍAS GRATIS`} bgColor="bg-green"/>
              </div>

            </div>

            <div className="row" style={{overflowX: "scroll"}}>
              <div className="d-flex">
                {suscription.movies.map(movie => {
                  return(
                    <div 
                      className="rounded OffersPage-offer-item overflow-y-hidden ProductList-m-0 
                        OffersPage-p-relative"
                      >
                      <img className="rounded" height="230px" src={movie.image} alt={movie.title} />
                      <div className="SearchHelp-p-absoulte bottom-0 w-100 bg-gradiant-transparent" 
                        style={{padding: "4px 8px"}}
                        >
                        <p className="txt-light-grey-roofstrap fz-sm">{movie.title}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="br-top row">
              <TextLink className="d-flex ai-center justify-content-sb w-100" url="/">
                <span className="txt-blue fz-sm">{activarText}</span>
                <Icon icon="arrow-right" className="txt-blue" />
              </TextLink>
            </div>

          </div>
          )
        })
      }
    </>
  )
}

export default PartnerCard