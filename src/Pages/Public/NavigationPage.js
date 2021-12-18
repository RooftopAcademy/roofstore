import InteractionProductItem from "../../Components/InteractionProductItem"
import navigationList from "./NavigationPage/navigationData"
import TextLine from '../../Components/TextLine'
import TextLink from "../../Components/TextLink"
import WebsiteLayout from "../../Layouts/WebsiteLayout"

function NavigationPage() {

    const title = "Tu historial"
    const adminTextLink = "Administrar"

    return (
        <WebsiteLayout>
            <div className="container padding-none bg-main">
                <div className="row NavigationPage-padding-top-24">
                    <div className="col padding-none HomePage-fs-20">{title}</div>
                    <div className="col padding-none">
                        <TextLink url={'/navigation/admin'} className={'txt-blue txt-bold HomePage-fs-14'}>{adminTextLink}</TextLink>
                    </div>
                </div>

                {navigationList.map((navigation, index) => {
                    return (
                    <div key={index}>
                        <div className={index === 0 ? "row" : "row m-top-5" }>
                            <div className="col padding-none">
                                <TextLine className={"HomePage-fs-14 txt-bold HomePage-txt-start"} text={navigation.period}/>
                            </div>
                        </div>

                        <ul>
                        {navigation.products.map((product, index) => {
                            return (
                            <li className="br-btm" key={index}>
                                <InteractionProductItem
                                    item={product}
                                    favButton = {true}
                                />
                            </li>
                            )
                        })
                        }
                        </ul>
                    </div>
                    )
                })}
            </div>
        </WebsiteLayout>
    )
}

export default NavigationPage
