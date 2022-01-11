import React from "react";

const localStoreText = "HASTA"
const percentageSymbol = "%"
const offText = "OFF"

function CardLocalStore ({store}) {
    return (
        <div className="d-flex fd-col ai-center" data-testid="local-store-test">
            <div>
                <img className="HomePage-border-circle" src={store.logo} alt={store.name} width="60px" />
            </div>

            <div className="d-flex fd-col ai-center">
                <p className="fz-sm">{localStoreText}</p>
                <p> <span className="txt-bold">{store.offer}</span>{percentageSymbol}<span className="txt-bold">{offText}</span></p>
            </div>
        </div>
    )
}

export default CardLocalStore