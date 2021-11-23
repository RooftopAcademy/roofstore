import Logo from "../../../../Components/Logo";
import TextLine from "../../../../Components/TextLine";
import Badge from "../Component/Badge";
import SeeMore from "../Component/SeeMore";
import Icon from "../../../../Components/Icon"


let title = "Informacón de la tienda"
let message = "Ver más datos"
let url = "/perfil/Mall-360"

function ProductInfoStore({item, store}) {
    let oficialStore = "Tienda oficial de mercado libre"
    return (
        <div className=" br-top">
            <div className="row ">
                <div className="col">
                    <TextLine text={title} className={"txt-black ProductPage-fs-18"}/>
                </div>
            </div>
            <div className="row  ProductPage-jc-start">
                <div className="col padding-none navbar-width-logo rounded m-left-0">
                    <Logo imgAlt={store.nameStore} imgSrc={store.logoStore}/>
                </div>
                <div className="col ">
                    <TextLine text={store.nameStore} className={"txt-black ProductPage-fs-14"}/>
                    <TextLine text={oficialStore} className={"ProductPage-txt-light-grey ProductPage-fs-14"}/>  
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
                    <TextLine text={"Ventas en los últimos 60 días"} className={"txt-grey ProductPage-fs-12"}/>    
                </div>
                <div className="col txt-center br-left br-right">
                    <span className="txt-green"><Icon icon="coment"/></span>
                    <TextLine text={"Brinda buena atencion"} className={"txt-grey ProductPage-fs-12"}/>  
                </div>
                <div className="col txt-center">
                    <span className="txt-green "><Icon icon="watch"/></span>
                    <TextLine text={"Despacha sus productos a tiempo"} className={"txt-grey ProductPage-fs-12"}/>  
            </div>
      </div>

           <SeeMore
           message = {message}
           url = {url}
           />
          
        </div>

    );
}

export default ProductInfoStore