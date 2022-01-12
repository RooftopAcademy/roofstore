import Icon from "../../../Components/Icon";
import { Link } from "react-router-dom";

function MyAccountBlock ({items}) {
    return (
        <div className="bg-white shadow-sm">
            {items.map((item, i) => {
                return (
                    <Link role="link" to={item.to} className="link" key={i}>
                        <div className="row padding-none br-btm">
                            <div className="col txt-grey">
                                <div>
                                    <p className="fz-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <Icon className='txt-grey-copyright m-3' icon="arrow-right" />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
        
    )
}
export default MyAccountBlock;