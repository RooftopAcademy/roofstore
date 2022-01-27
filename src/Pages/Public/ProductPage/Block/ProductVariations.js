import Selector from "../Component/Selector";

function ProductVariations({item}) {
    return (
        <>
            {item.variantSpecs &&
                <div>
                    {item.variantSpecs.map((spec, index) =>
                        <Selector
                            key={index}
                            variantOpcion = {spec.variant} 
                            opcion = {spec.options[0]} />
                    )
                    }
                </div>
            }
       </>
    )
}

export default ProductVariations