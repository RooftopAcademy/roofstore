import Icon from "../../../../Components/Icon"
import TextLine from "../../../../Components/TextLine";

function ProductShare() {
    return(
            <div className="row padding-none ProductPage-jc-center">
                <div className="col ProductPage-d-flex">
                    <span className="m-right-0 txt-blue"><Icon icon="empty-heart"/></span>
                    <span><TextLine text="Agregar a favoritos" className={"txt-blue ProductPage-fs-14"}/></span>
                </div>
                <div className="col ProductPage-d-flex">
                    <span className="m-right-0 txt-blue"><Icon icon="share"/></span>
                    <span><TextLine text="Compartir" className={"txt-blue ProductPage-fs-14"}/></span>
                </div>
            </div>

);
}

export default ProductShare 