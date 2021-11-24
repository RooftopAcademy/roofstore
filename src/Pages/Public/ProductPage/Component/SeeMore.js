import { Link } from "react-router-dom"
import TextLink from "../../../../Components/TextLink";
import Icon from "../../../../Components/Icon";

function SeeMore({ message, url }) {
    return (
        <Link className={'link'} to={url}>
            <div className="container">
                <div className="row grey-border rounded padding-none">
                    <div className="col pading-none ProductPage-fs-14">
                        <TextLink
                            url={url}
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
        </Link>
    );
}
export default SeeMore;
