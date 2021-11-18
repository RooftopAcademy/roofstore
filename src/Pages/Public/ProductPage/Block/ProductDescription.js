import TextLine from "../../../../Components/TextLine";
let title = "Descripción"

function ProductDescription({item}) {
    return (
        <div className="container br-top">
            <div className="row padding-none">
                <div className="col">
                    <TextLine text={title} className={"txt-black ProductPage-font-size-large"}/>
                </div>
            </div>
            <div className="row padding-none">
                <div className="col padding-None">
                    {item.description}
                </div>
            </div>
        </div>
    );
}

export default ProductDescription