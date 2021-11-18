import TextLine from "../../../../Components/TextLine";
import TextLink from "../../../../Components/TextLink";
import Icon from "../../../../Components/Icon"
import TextTag from "../../../../Components/TextTag"



function ProductHeader({item, store}) {
    let subtitle = item.condition + " | " + item.quantitySales + " vendidos"
    let reviews = item.reviews + " opiniones"
    let por = "Por "
    let textTag = "MÁS VENDIDO"
    let category = item.ranking + "° en " + item.category


    return (
        <div>
            <div className="row navbar-p-base">
                <div className="col padding-none m-left-0">
                    <TextLine text={subtitle} className={"ProductPage-txt-light-grey ProductPage-font-size-subtitle"}/>
                </div>
            </div>
            <div className="row navbar-p-base ProductPage-p-bottom-0 ProductPage-p-top-0">
                <div className="col padding-none m-left-0">
                        <TextLine text={item.title} className={"txt-black ProductPage-font-size-title"}/>
                </div>
            </div>
            <div className="row padding-none">
                <div className="col padding-none m-left-3">
                    {store.oficialStore &&
                        <span className="ProductPage-d-flex ProductPage-font-size-subtitle">
                            <span className="">
                                <TextLine text={por} className={"ProductPage-txt-light-grey"}/>
                            </span>
                            <TextLink  url="/Login" className={"txt-blue"} children={store.nameStore}/>
                        </span>
                    }   
                    
                </div>
            </div>
            <div className="row navbar-p-base">
                <div className="col padding-none m-left-0">
                    <div className="ProductPage-d-flex  ProductPage-font-size-medium"> 
                        <span className="txt-blue m-right-0 ProductPage-font-size-small">
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="full-star"/>
                            <Icon icon="half-star"/>
                        </span>
                        <span>
                            <TextLine text={reviews} className={"ProductPage-txt-light-grey"}/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row navbar-p-base ProductPage-p-top-0">
                <div className="col padding-none m-left-0">
                    {item.bestSellers &&
                        <span>
                            <span className="m-right-0"> 
                                <TextTag text={textTag} txtColor="txt-white" bgColor="ProductPage-bg-orange"/>
                            </span> 
                            <TextLink  url="/Login" className={"txt-blue ProductPage-font-size-subtitle"} children={category}/>
                        </span>
                    }
                </div>
            </div>

        </div>
    );
}

export default ProductHeader;