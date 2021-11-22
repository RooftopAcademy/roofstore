import Logo from "../../../../Components/Logo";
import TextLine from "../../../../Components/TextLine";
import Badge from "../Component/Badge";
import SeeMore from "../Component/SeeMore";
import Icon from "../../../../Components/Icon"


let title = "Informacón de la tienda"

function ProductInfoStore({item, store}) {
    let oficialStore = "Tienda oficial de mercado libre"
    return (
        <div className="container br-top">
            <div className="row padding-none">
                <div className="col">
                    <TextLine text={title} className={"txt-black ProductPage-font-size-large"}/>
                </div>
            </div>
            <div className="row padding-none ProductPage-jc-start m-left-0">
                <div className="col padding-none navbar-width-logo rounded m-left-0">
                    <Logo imgAlt={store.nameStore} imgSrc={store.logoStore}/>
                </div>
                <div className="col ">
                    <TextLine text={store.nameStore} className={"txt-black ProductPage-font-size-medium"}/>
                    <TextLine text={oficialStore} className={"ProductPage-txt-light-grey ProductPage-font-size-medium"}/>  
                </div>
            </div>
           <Badge
           icon = "medal" 
           title = "MercadoLíder Platinum" 
           description = "¡Es uno de los mejores del sitio!"
           />

            <div className="row">
                <div className="col  txt-center">
                    <TextLine text={"18119"} className={"txt-grey ProductPage-font-size-x-large"}/>
                    <TextLine text={"Ventas en los últimos 60 días"} className={"txt-grey ProductPage-font-size-subtitle"}/>    
                </div>
                <div className="col txt-center br-left br-right">
                    <span className="txt-green"><Icon icon="coment"/></span>
                    <TextLine text={"Brinda buena atencion"} className={"txt-grey ProductPage-font-size-subtitle"}/>  
                </div>
                <div className="col txt-center">
                    <span className="txt-green "><Icon icon="watch"/></span>
                    <TextLine text={"Despacha sus productos a tiempo"} className={"txt-grey ProductPage-font-size-subtitle"}/>  
            </div>
      </div>

           <SeeMore
           message = "Ver más datos"
           />
          
        </div>

    );
}

export default ProductInfoStore