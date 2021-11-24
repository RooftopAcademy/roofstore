import Selector from "../Component/Selector";
import product from "../dataProduct";

function ProductVariations({item}) {
    return (
        <div>
            {item.variantSpecs &&
                <span>
                    <Selector
                        variantOpcion = {product.variantOpcion[0]} 
                        opcion = {product.opcion[0]}
                    /> 
                    <Selector
                        variantOpcion = {product.variantOpcion[1]} 
                        opcion = {product.opcion[1]}
                    />   
                </span>   
            }
       </div>
        
    );
}
export default ProductVariations