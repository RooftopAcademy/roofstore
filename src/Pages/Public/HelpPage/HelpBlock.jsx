import Icon from "../../../Components/Icon";
import { Link } from "react-router-dom";

function HelpBlock({ items, dataTestId }) {

    return (
        <div data-testid={dataTestId} className="round bg-white shadow-sm">
            {items.map((item, i) => {
                return (
                    <Link role="link" to={item.to} className="link txt-black" key={i}>
                        <div className="ProductPage-btn-left row br-btm">
                            <div className="col">
                                <div>
                                    {item.title &&
                                        <p className="fz-m txt-bold">
                                            {item.title}
                                        </p>
                                    }
                                    {item.explication &&
                                        <p className="fz-sm txt-grey-copyright">
                                            {item.explication}
                                        </p>
                                    }
                                </div>
                                {item.text &&
                                    <p className="fz-m">
                                        {item.text}
                                    </p>
                                }
                            </div>
                            <div className="fz-l txt-grey-copyright">
                                <Icon className='txt-grey-copyright' icon="arrow-right" />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default HelpBlock;