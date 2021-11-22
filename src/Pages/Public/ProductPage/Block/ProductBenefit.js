import Badge from "../Component/Badge";

function ProductBenefit({item}) {
    return (
        <span>
            {item.freeShipping &&
                <Badge
                    icon = "free-shipping"
                    title = "Envío gratis a todo el país"
                    description = "Conocé los tiempos y las formas de envío."
                    txtLink = "Calcular cuándo llega"
                />
            }
            
            <Badge
                icon = "devolution"
                title = "Devolución gratis"
                description = "Tenés 30 días desde que lo recibís."
                txtLink = "Conocer más"
            />
        </span>
        

        
    );
}

export default ProductBenefit

