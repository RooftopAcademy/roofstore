import DistractionFreeLayout from "../Layouts/DistractionFreeLayout";
import info from "./TermsAndConditionsPage/info";

let titulo = "Términos y condiciones de uso del Sitio"
let text = info
function TermsAndConditionsPage() {
    return(
        <DistractionFreeLayout>
            <div className="container bg-light-grey ">
                <div className="row txt-bold ProductPage-fs-24">
                    <div className="col">
                        {titulo}
                    </div>
                </div>
                <div className="row bg-white rounded">
                    <div className="col ">
                        {text}
                    </div>
                </div>
            </div>
        </DistractionFreeLayout>
    ) 
  }
  
  export default TermsAndConditionsPage;
  