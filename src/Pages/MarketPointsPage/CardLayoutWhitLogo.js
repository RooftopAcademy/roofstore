import React from "react";
import Icon from "../../Components/Icon";
import TextLink from "../../Components/TextLink";
import TextTag from "../../Components/TextTag";

const btnText = "Descargar"

function CardLayoutWhitLogo (
  {
    children, 
    icon,
    tag,
    title,
    subtitle,
    download = false,
    logoDownload,
    titleDownload,
    textLink,
    urlLink = '/'
      
  }) {
  return(
    <div className="bg-white my-3 rounded shadow-m">
      <div className={`row ${subtitle? 'ai-start' : 'ai-center' } br-btm OffersPage-p-relative`}>
        <div className="HomePage-border-circle bg-green d-flex" style={{padding: "10px 9px"}}>
          <Icon icon={icon} className="txt-white" />
        </div>
        <div className="m-left-4">
          <p >{title}</p>
          {subtitle? <p className="fz-sm">{subtitle}</p> : ''}
        </div>
        { tag? 
          <TextTag text="NUEVO" className="SearchHelp-p-absoulte br-x-1 right-0 top-0" /> 
          : ''
        }
      </div>

      {children}

      <div className={`row ${download? 'br-top' : ''} `}>
        {
          download? 
          <div className="d-flex justify-content-sb ai-center">
            <div className="d-flex ai-center w-60">
              <div className="p-1">
                <img src={logoDownload} alt={icon} width="40px" />
              </div>
              <p className="fz-sm m-left-0">
                {titleDownload}
              </p>
            </div>
            <div>
              <button className="button MenuMobile-blue-border p-1 bg-blue rounded txt-white txt-bold">
                  {btnText}
              </button>
            </div>
          </div>
          : 
          <TextLink className="d-flex ai-center justify-content-sb w-100" url={urlLink}>
            <span className="txt-blue fz-sm">{textLink}</span>
            <Icon icon="arrow-right" className="txt-blue" />
          </TextLink>
        }
          
      </div>
    </div>
  )
}

export default CardLayoutWhitLogo