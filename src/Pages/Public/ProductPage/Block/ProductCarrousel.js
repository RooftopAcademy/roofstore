import Icon from "../../../../Components/Icon"
import TextTag from "../../../../Components/TextTag"
import BannerImage from "../../../../Components/BannerImage"

function ProductCarrousel({item}) {
    let cantImg = "1 de 1"

    return (
        <div className="">
            <div className="row">
                <div className="col">
                    <TextTag text={cantImg} txtColor="txt-black" bgColor="ProductPage-bg-light-grey"/>
                </div>
            </div>
            <div className="row ">
                <div className="col padding-none">
                    <BannerImage src={item.src} alt={item.alt}/>
                </div>
            </div>
            <div className="row ProductPage-jc-right">
                <div className="col grey-border ProductPage-bg-light-grey ProductPage-circle">
                    <span className="ProductPage-circle-content">
                        <Icon icon="share"/>
                    </span>
                </div>
            </div>
        </div>
        
    );
}

export default ProductCarrousel