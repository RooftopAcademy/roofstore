import Badge from "../Component/Badge";

function ProductBenefit({ item }) {
    const infoFreeShip = {
        "icon": "free-shipping",
        "title": "Envío gratis a todo el país",
        "description": "Conocé los tiempos y las formas de envío.",
        "txtLink": "Calcular cuándo llega",
        "url": "/mercado-envios",
    }

    const inforDevolution = {
        "icon": "devolution",
        "title": "Devolución gratis",
        "description": "Tenés 30 días desde que lo recibís.",
        "txtLink": "Conocer más",
        "url": "/politicas-de-devolucion",
    }

    return (
        <span>
            {item.freeShipping &&
                <Badge
                    icon={infoFreeShip.icon}
                    title={infoFreeShip.title}
                    description={infoFreeShip.description}
                    txtLink={infoFreeShip.txtLink}
                    url={infoFreeShip.url}
                />
            }

            <Badge
                icon={inforDevolution.icon}
                title={inforDevolution.title}
                description={inforDevolution.description}
                txtLink={inforDevolution.txtLink}
                url={inforDevolution.url}
            />
        </span>



    );
}

export default ProductBenefit

