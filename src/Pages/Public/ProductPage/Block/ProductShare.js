import Icon from "../../../../Components/Icon"
import TextLine from "../../../../Components/TextLine";

function ProductShare() {
    return(
        <div className="container">
            <div className="row ProductPage-jc-center">
                <div className="col ProductPage-d-flex">
                    <span className="m-right-0 txt-blue"><Icon icon="empty-heart"/></span>
                    <span><TextLine text="Agregar a favoritos" className={"txt-blue ProductPage-font-size-medium"}/></span>
                </div>
                <div className="col ProductPage-d-flex">
                    <span className="m-right-0 txt-blue"><Icon icon="share"/></span>
                    <span><TextLine text="Compartir" className={"txt-blue ProductPage-font-size-medium"}/></span>
                </div>
            </div>
        </div>

);
}

export default ProductShare 