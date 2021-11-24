import TextLine from "../../../../Components/TextLine";
import Icon from "../../../../Components/Icon"

function NavbarAdress() {
    return (
        <div className="bg-primary br-top shadow-sm">
            <div className="row padding-none">
            <div className="col txt-white padding-none">
                <span className="ProductPage-d-flex m-left-0  ProductPage-fs-13">
                    <span className="m-right-0">
                        <Icon icon="pin-marker"/>
                    </span>
                    <TextLine text="Enviar a Capital Federal" className={"txt-white"}/>
                </span>
            </div>
            <div className="col txt-white">
                <Icon icon="arrow-right"/>
            </div>
            </div>
        </div>
    );
}

export default NavbarAdress