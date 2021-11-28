
import TextPageLayout from "../Layouts/TextPageLayout";
import info from "./TermsAndConditionsPage/info";

let titulo = "Términos y condiciones de uso del Sitio"
let text = info
function TermsAndConditionsPage() {
    return(
        <TextPageLayout showInfoVotation={true}>
            <div className="container padding-none">
                <div className="row txt-bold ProductPage-fs-24 padding-none m-bottom-5  ">
                    <div className="col padding-none m-bottom-5 m-top-5">
                        {titulo}
                    </div>
                </div>
                <div className="row bg-white rounded">
                    <div className="col ">
                        {text}
                    </div>
                </div>
            </div>
        </TextPageLayout>
    ) 
  }
  
  export default TermsAndConditionsPage;
  