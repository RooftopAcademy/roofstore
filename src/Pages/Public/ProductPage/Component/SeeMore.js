import TextLink from "../../../../Components/TextLink";
import Icon from "../../../../Components/Icon";

function SeeMore({ message }) {
    return (
        <div className="container">
            <div className="row grey-border rounded padding-none">
                <div className="col pading-none ProductPage-font-size-medium">
                    <TextLink
                        url="/Login"
                        className={"txt-blue"}
                        children={message}
                    />
                </div>
                <div className="col">
                    <span className="txt-blue">
                        <Icon icon="arrow-right" />
                    </span>
                </div>
            </div>
        </div>
    );
}
export default SeeMore;
