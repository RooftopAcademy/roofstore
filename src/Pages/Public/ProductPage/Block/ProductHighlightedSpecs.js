import TextLine from "../../../../Components/TextLine";
import Spec from "../Component/Spec";
import SeeMore from "../Component/SeeMore";
import product from "../dataProduct";

let title = "Características del producto";
let mensaje = "Ver más características";
let url = "/specifications"

let specific = product.specs

function ProductHighlightedSpecs({product}) {
    return (
        <div className=" br-top">
            <div className="row padding-none">
                <div className="col">
                    <TextLine
                        text={title}
                        className={"txt-black ProductPage-fs-18"}
                    />
                </div>
            </div>

            {specific.map((spec) => {
                return <Spec item={spec} key={spec.id}/>;
            })}
            
            <SeeMore message={mensaje} url = {url}/>
        </div>
    );
}

export default ProductHighlightedSpecs;