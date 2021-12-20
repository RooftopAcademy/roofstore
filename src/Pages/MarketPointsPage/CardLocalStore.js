import React from "react";

function CardLocalStore ({store}) {
    return (
        <div className="d-flex fd-col ai-center">
            <div>
                <img className="HomePage-border-circle" src={store.logo} alt={store.name} width="60px" />
            </div>

            <div className="d-flex fd-col ai-center">
                <p className="fz-sm">HASTA</p>
                <p> <span className="txt-bold">{store.offer}</span>% <span className="txt-bold">OFF</span></p>
            </div>
        </div>
    )
}

export default CardLocalStore