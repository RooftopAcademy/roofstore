import React from "react";
import Icon from "../../Components/Icon";
import TextLink from "../../Components/TextLink";

const levelText = "Nivel"

function CardLockedLevels ({nextLevelBenefit, textLink, urlLink = '/'}) {
  return (
    <div className="bg-white my-3 rounded shadow-m">
      {nextLevelBenefit.map(item => {
        return(
          <div data-testid="level-benefit-test" className={`row ai-center br-btm OffersPage-p-relative txt-grey-copyright`}>
            <div className="d-flex ai-center w-80">
              <div className="HomePage-border-circle bg-main d-flex" style={{padding: "10px 9px"}}>
                <Icon icon={item.logo} className="txt-white" />
              </div>
              <div className="m-left-4">
                <p className="fz-sm">{item.title}</p>
              </div>
            </div>
            <div className="d-flex ai-center">
              <Icon icon="lock" className="m-right-3 fz-sm" />
              <p className="fz-sm">{levelText} {item.level}</p>
            </div>
          </div>
        )
      })}
      <div className="row">
        <TextLink className="d-flex ai-center justify-content-sb w-100" url={urlLink}>
          <span className="txt-blue fz-sm">{textLink}</span>
          <Icon icon="arrow-right" className="txt-blue" />
        </TextLink>
      </div>
    </div>
  )
}

export default CardLockedLevels