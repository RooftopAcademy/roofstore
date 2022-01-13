import Icon from "../../Components/Icon";
import DistractionFreeLayout from '../../Layouts/DistractionFreeLayout'
import categoriesMyAccountData from './MyAccount/categoriesMyAccountBlocksData'
import MyAccountBlock from './MyAccount/myAccountBlock'
import TextLink from '../../Components/TextLink'

const username = 'señor/a'
const level = '2'

function MyAccountPage() {

    return (        
        <DistractionFreeLayout>
            <div className="row padding-none fz-sm">
                <div className="col p-0 ">
                    <img className="" src="../../../progress-bar.png" alt="progress-bar-level-user"></img>
                </div>
                <div className="col m-right-5">
                    <div>
                        <p className="texttag-p m-right-5 txt-grey-copyright">
                            Hola {username}!
                        </p>
                        <p className="ProductPage-fs-16">
                            Nivel {level} - Mercado Puntos
                        </p>
                    </div>
                </div>
                <div className="col">
                    <Icon className='txt-grey-copyright m-3' icon="arrow-right" />
                </div>
            </div>
            <div className="row bg-main fz-sm padding-none txt-black" >
                <div className="w-100">
                    {categoriesMyAccountData.map(categories => {
                        return (
                            <div key={categories.id}>
                                {categories.title !== '' && <p className="col m-bottom-0">{categories.title}</p>}
                                <MyAccountBlock items={categories.items} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="row txt-grey-copyright fz-xsm">
                <div className="">
                    <TextLink url="/login">Salir</TextLink>
                    <p>2022 Rooftore S.R.L.</p>
                </div>
            </div>
        </DistractionFreeLayout>
    )
}

export default MyAccountPage