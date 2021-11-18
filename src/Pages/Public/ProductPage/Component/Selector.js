import Icon from "../../../../Components/Icon";

function Selector({variantOpcion, opcion, placeHolder}) {
    return  (

        <div className="container ProductPage-p-bottom-0 ProductPage-p-top-0">
            <div className="row ProductPage-bg-light-grey grey-border rounded">
                <div className="col padding-none m-left-0">
                    <span>
                        <span className="txt-grey">{variantOpcion}</span>
                            <span className="txt-bold m-left-0">{opcion}</span>
                            <span className="ProductPage-txt-light-grey m-left-0">{placeHolder}</span>
                        </span>
                    </div>
                        
                    <spam className="txt-blue">
                        <Icon icon={"arrow-right"}/>
                    </spam>
                </div>
            </div>

        ) ;
    
    }

export default Selector