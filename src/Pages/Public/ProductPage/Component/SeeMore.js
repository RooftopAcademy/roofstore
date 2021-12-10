import { Link } from "react-router-dom"
import Icon from "../../../../Components/Icon";
import TextLine from "../../../../Components/TextLine";

function SeeMore({ message, url }) {
    return (
        <Link className={'link'} to={url}>
            <div className="container">
                <div className="row grey-border rounded padding-none">
                    <div className="col pading-none ProductPage-fs-14">
                        <TextLine
                            className={"txt-blue"}
                            text={message}
                        />
                    </div>
                    <div className="col">
                        <span className="txt-blue">
                            <Icon icon="arrow-right" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default SeeMore;
